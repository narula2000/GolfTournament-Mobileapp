import React from 'react';
import { View, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Button, TextInput } from 'react-native-paper';
import styles from '../styles/SignInScreenStyle';

const SignInScreen = () => {
  const navigation = useNavigation();

  const [number, setNumber] = React.useState('');
  const onEnterPressed = () => {
    console.log('button pressed');
    console.log('number setted');
    console.log(number);
    navigation.navigate('HomeScreen');
  };
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
        <Text style={styles.text}>Enter Phone Number</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={(num) => setNumber(num)}
          value={number}
          mode="outlined"
          keyboardType="phone-pad"
          maxLength={10}
        />
        <Button
          style={styles.button}
          labelStyle={styles.buttontext}
          mode="contained"
          onPress={onEnterPressed}
        >
          Enter Tournament
        </Button>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignInScreen;
