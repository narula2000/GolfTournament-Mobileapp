import React from 'react';
import firebase from 'firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RankingScreen from './screens/RankingScreen';
import RankingMock from './screens/RankingMock';
import InfoScreen from './screens/InfoScreen';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import Ranking from './screens/Ranking';
import Info from './screens/Info';
import SignIn from './screens/SignIn';
import Home from './screens/Home';
import QRcodeScreen from './screens/QRcode';
import CameraScreen from './screens/Camera';
import firebaseConfig from './firebase';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="QRcodeScreen">
      <Stack.Screen
        name="QRcodeScreen"
        component={QRcodeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="QRcodeScanner"
        component={CameraScreen}
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
        name="RankingMock"
        component={RankingMock}
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
      <Stack.Screen
        name="Ranking"
        component={Ranking}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
