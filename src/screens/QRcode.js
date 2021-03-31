import React from 'react';
import { View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import 'firebase/auth';
import styles from '../styles/QRcodeScreenStyle';

const QRcode = () => {
  const navigation = useNavigation();

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
          onPress={() => {
            navigation.navigate('QRcodeScanner');
          }}
        >
          Scan QR code
        </Button>
        <Text style={styles.text}>Where can I get QR code? : </Text>
        <Text>Contact any staff for Tournament QR code</Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default QRcode;
