import React from 'react';
import firebase from 'firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import QRcode from './screens/QRcode';
import QRcodeScanner from './screens/QRcodeScanner';
import firebaseConfig from './firebase';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('we have user');
  } else {
    console.log('we dont have user');
  }
});

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="QRcode">
      <Stack.Screen
        name="QRcode"
        component={QRcode}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="QRcodeScanner"
        component={QRcodeScanner}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
