// import React from 'react';
// import { View, Image, Alert } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { useNavigation } from '@react-navigation/native';
// import { Button, TextInput } from 'react-native-paper';
// import firebase from 'firebase/app';
// import styles from '../styles/SignInScreenStyle';

// const SignInScreen = () => {
//   const navigation = useNavigation();
//   const [phoneNumber, setPhoneNumber] = React.useState('');
//   const [verified, setVerified] = React.useState('');

//   const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//     'sign-in-button',
//     {
//       size: 'invisible',
//       callback: function (response) {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         // phoneNumAuth();
//       },
//     }
//   );

//   function phoneNumAuth() {
//     const appVerifier = recaptchaVerifier;
//     firebase
//       .auth()
//       .signInWithPhoneNumber(phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         // setVerified(confirmationResult);
//       })
//       .catch((error) => {
//         // Error; SMS not sent
//         console.error('Error during signInWithPhoneNumber', error);
//         Alert.alert(
//           `Error during signInWithPhoneNumber:\n\n${error.code}\n\n${error.message}`
//         );
//       });
//   }

//   return (
//     <View style={styles.maincontainer}>
//       <KeyboardAwareScrollView
//         resetScrollToCoords={{ x: 0, y: 0 }}
//         contentContainerStyle={styles.container}
//       >
//         <Image
//           // eslint-disable-next-line global-require
//           source={require('../assets/golf-logo.png')}
//           style={styles.image}
//         />
//         <TextInput
//           label="Enter Your Phone Number"
//           style={styles.textinput}
//           mode="outlined"
//           autoCompleteType="tel"
//           keyboardType="phone-pad"
//           textContentType="telephoneNumber"
//           placeholder="+66 99 999 9999"
//           maxLength={12}
//           onChangeText={(num) => setPhoneNumber(num)}
//         />
//         <Button
//           style={styles.button}
//           labelStyle={styles.buttontext}
//           mode="contained"
//           id="sign-in-button"
//           onPress={phoneNumAuth}
//         >
//           Send Verification Code
//         </Button>
//         <TextInput
//           style={styles.textinput}
//           placeholder="123456"
//           mode="outlined"
//           keyboardType="number-pad"
//           label="6-Digits OTP Code"
//         />
//         <Button style={styles.button} labelStyle={styles.buttontext}>
//           Confirm Verification Code
//         </Button>
//       </KeyboardAwareScrollView>
//     </View>
//   );
// };

// export default SignInScreen;
