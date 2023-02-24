import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NotificationParams, NotificationParamList} from './type';

import {NotificationScreen} from '../../test';

const Stack = createNativeStackNavigator<NotificationParamList>();

export const NotificationNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NotificationParams.Notification}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
};
