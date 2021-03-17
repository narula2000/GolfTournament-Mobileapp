import React from 'react';
import { View, Image, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebasefunction from '../firebase/functions';
import styles from '../styles/QRcodeScreenStyle';

// Implement QR code scanner check if the tournament exists if yes go to login page.

const Home = () => {
  const [tournamentId, setTournamentId] = React.useState('');
  return (
    <View style={styles.maincontainer}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
      >
        <Image
          // eslint-disable-next-line global-require
          source={require('../assets/golf-logo.png')}
          style={styles.image}
        />
        <Button
          style={styles.button}
          labelStyle={styles.buttontext}
          mode="contained"
        >
          Scan Tournament QR code
        </Button>
        <Text style={styles.text}>Where can I get QR code? : </Text>
        <Text>Contact any staff for Tournament QR code</Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Home;
