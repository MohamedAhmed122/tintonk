import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthParams, AuthParamList} from './type';
import {RegisterScreen, LoginScreen} from '../../test';
import {PhoneAuthScreen, WelcomeScreen} from '@Screens/index';

const Stack = createNativeStackNavigator<AuthParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AuthParams.Welcome} component={WelcomeScreen} />
      <Stack.Screen
        name={AuthParams.PhoneAuthentication}
        component={PhoneAuthScreen}
      />
      <Stack.Screen name={AuthParams.Login} component={LoginScreen} />
      <Stack.Screen name={AuthParams.Register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
