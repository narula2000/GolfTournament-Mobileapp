import React from 'react';
import { View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from 'react-native-paper';
import Logo from '../components/Logo';
import Background from '../components/Background';
import theme from '../core/theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    height: 59,
    justifyContent: 'center',
    marginVertical: 20,
    width: 'auto',
  },
  buttontext: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textinput: {
    backgroundColor: theme.colors.white,
    marginVertical: 10,
    width: '100%',
  },
});

const SignInScreen = () => {
  // const { navigate } = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const _onEnterPressed = () => {
    console.log('button pressed');
  };
  return (
    <View style={Background.background}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={Background.container}
        keyboardShouldPersistTaps="always"
      >
        <Logo />
        <TextInput
          label="Username"
          value={username}
          mode="outlined"
          onChangeText={(username) => setUsername(username)}
          style={styles.textinput}
          returnKeyType="next"
        />
        <TextInput
          label="Password"
          value={password}
          mode="outlined"
          onChangeText={(password) => setPassword(password)}
          style={styles.textinput}
          secureTextEntry
          returnKeyType="done"
        />
        <Button
          style={styles.button}
          labelStyle={styles.buttontext}
          mode="contained"
          onPress={_onEnterPressed}
        >
          {' '}
          Enter Tournament{' '}
        </Button>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignInScreen;
