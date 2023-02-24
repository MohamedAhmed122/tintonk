import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppNavigationParams, AppNavigationParamList} from './type';
import {AuthNavigator} from '../auth-navigation';
import {TabNavigation} from '../tab-navigation';

const Stack = createNativeStackNavigator<AppNavigationParamList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AppNavigationParams.Auth} component={AuthNavigator} />
      <Stack.Screen name={AppNavigationParams.Tab} component={TabNavigation} />
      {/* <Stack.Screen name={AppNavigationParams.Tab} component={TabNavigation} /> */}
    </Stack.Navigator>
  );
};
