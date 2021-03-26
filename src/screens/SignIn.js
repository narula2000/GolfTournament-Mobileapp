import React from 'react';
import { View, Image, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from 'expo-firebase-recaptcha';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase/index';
import styles from '../styles/SignInScreenStyle';
import firebasefunction from '../firebase/functions';

const SignIn = () => {
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState('');
  const [showOTP, setShowOTP] = React.useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { tournamentId, adminId } = route.params;
  const attemptInvisibleVerification = true;
  const auth = firebase.auth();
  const newUID = String(auth.currentUser.uid);
  const num = String(auth.currentUser.phoneNumber);

  const getUserInfo = async () => {
    const currentScore = await firebasefunction.fetchValidUserScore(
      newUID,
      adminId,
      tournamentId
    );
    const username = await firebasefunction.fetchUserName(
      newUID,
      adminId,
      tournamentId
    );
    return [username, currentScore];
  };

  const signIn = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await firebase.auth().signInWithCredential(credential);
      await firebasefunction.renameUserId(newUID, num, adminId, tournamentId);

      const userInfo = getUserInfo();

      navigation.navigate('Home', {
        tournamentId: tournamentId,
        adminId: adminId,
        username: userInfo.username,
        currentScore: userInfo.currentScore,
      });
    } catch (err) {
      Alert.alert(`Error: ${err.message}`);
    }
  };

  const verifyOTP = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationid = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationid);
      setShowOTP(true);
      Alert.alert('Verification code has been sent to your phone.');
    } catch (err) {
      Alert.alert(`Error: ${err.message}`);
    }
  };

  const sendOTP = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationid = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationid);
      setShowOTP(true);
      Alert.alert('Verification code has been sent to your phone.');
    } catch (err) {
      Alert.alert(`Error: ${err.message}`);
    }
  };

  return (
    <View style={styles.maincontainer}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
      >
        {showOTP ? (
          <View style={styles.container}>
            <Image
              // eslint-disable-next-line global-require
              source={require('../assets/golf-logo.png')}
              style={styles.image}
            />
            <FirebaseRecaptchaVerifierModal
              ref={recaptchaVerifier}
              firebaseConfig={firebaseConfig}
              attemptInvisibleVerification={attemptInvisibleVerification}
            />
            <TextInput
              style={styles.textinput}
              mode="outlined"
              keyboardType="number-pad"
              label="6-Digits OTP Code"
              placeholder="123456"
              value={verificationCode}
              onChangeText={setVerificationCode}
            />
            <Button
              style={styles.button}
              labelStyle={styles.buttontext}
              disabled={!verificationId}
              onPress={signIn()}
            >
              Confirm Verification Code
            </Button>
            <Button
              style={styles.button}
              labelStyle={styles.buttontext}
              mode="contained"
              disabled={!phoneNumber}
              onPress={verifyOTP()}
            >
              {' '}
              Resend Verification Code
            </Button>
            {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
          </View>
        ) : (
          <View style={styles.container}>
            <Image
              // eslint-disable-next-line global-require
              source={require('../assets/golf-logo.png')}
              style={styles.image}
            />
            <FirebaseRecaptchaVerifierModal
              ref={recaptchaVerifier}
              firebaseConfig={firebaseConfig}
              attemptInvisibleVerification={attemptInvisibleVerification}
            />
            <TextInput
              label="Enter Phone Number"
              style={styles.textinput}
              placeholder="+66 234567890"
              mode="outlined"
              autoCompleteType="tel"
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              maxLength={19}
              onChangeText={(number) => setPhoneNumber(number)}
            />
            <Button
              style={styles.button}
              labelStyle={styles.buttontext}
              mode="contained"
              disabled={!phoneNumber}
              onPress={sendOTP()}
            >
              Send Verification Code
            </Button>
            {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
          </View>
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignIn;
