import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RankingScreen from './screens/SignInScreen';
import SignInScreen from './screens/SignInScreen';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SignInScreen">
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RankingScreen"
        component={RankingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
