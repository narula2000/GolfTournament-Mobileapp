import React from 'react';
import { View, Image, Text, ActivityIndicator, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput } from 'react-native-paper';
import firebase from 'firebase/app';
import FirebaseRecaptcha from 'expo-firebase-recaptcha';
import styles from '../styles/SignInScreenStyle';
import firebaseConfig from '../firebase/index';

const SignInScreen = () => {
  const navigation = useNavigation();
  const recaptchaVerifier = React.useRef(null);
  const verificationCodeTextInput = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [verificationId, setVerificationId] = React.useState('');
  const [verifyError, setVerifyError] = React.useState();
  const [verifyInProgress, setVerifyInProgress] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState('');
  const [confirmError, setConfirmError] = React.useState();
  const [confirmInProgress, setConfirmInProgress] = React.useState(false);

  const onEnterPressed = () => {
    console.log('button pressed');
    console.log('number setted');
    console.log(phoneNumber);
    navigation.navigate('HomeScreen');
  };
  async function submitPhonenum() {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    try {
      setVerifyError(undefined);
      setVerifyInProgress(true);
      setVerificationId('');
      // eslint-disable-next-line no-shadow
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerifyInProgress(false);
      setVerificationId(verificationId);
      verificationCodeTextInput.current?.focus();
    } catch (err) {
      setVerifyError(err);
      setVerifyInProgress(false);
    }
  }
  return (
    <View style={styles.maincontainer}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
      >
        <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification
        />
        <Image
          // eslint-disable-next-line global-require
          source={require('../assets/golf-logo.png')}
          style={styles.image}
        />
        <TextInput
          label="Enter Your Phone Number"
          style={styles.textinput}
          mode="outlined"
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          placeholder="+66 99 999 9999"
          maxLength={12}
          editable={!verificationId}
          onChangeText={(num) => setPhoneNumber(num)}
        />
        <Button
          style={styles.button}
          labelStyle={styles.buttontext}
          mode="contained"
          onPress={submitPhonenum}
          title={`${verificationId ? 'Resend' : 'Send'} Verification Code`}
          disabled={!phoneNumber}
        >
          Enter Tournament
        </Button>
        {verifyError && (
          <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>
        )}
        {verifyInProgress && <ActivityIndicator style={styles.loader} />}
        {verificationId ? (
          <Text style={styles.success}>
            A verification code has been sent to your phone
          </Text>
        ) : undefined}
        <Text style={styles.text}>Enter verification code</Text>
        <TextInput
          ref={verificationCodeTextInput}
          style={styles.textInput}
          editable={!!verificationId}
          placeholder="123456"
          onChangeText={(verifycode) => setVerificationCode(verifycode)}
        />
        <Button
          style={styles.button}
          title="Confirm Verification Code"
          disabled={!verificationCode}
          onPress={async () => {
            try {
              setConfirmError(undefined);
              setConfirmInProgress(true);
              const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                verificationCode
              );
              const authResult = await firebase
                .auth()
                .signInWithCredential(credential);
              setConfirmInProgress(false);
              setVerificationId('');
              setVerificationCode('');
              verificationCodeTextInput.current?.clear();
              Alert.alert('Phone authentication successful!');
            } catch (err) {
              setConfirmError(err);
              setConfirmInProgress(false);
            }
          }}
        />
        {confirmError && (
          <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>
        )}
        {confirmInProgress && <ActivityIndicator style={styles.loader} />}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignInScreen;
