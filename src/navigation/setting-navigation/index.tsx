import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingParams, SettingParamList} from './type';
import {ProfileDetailsScreen} from '../../test';

const Stack = createNativeStackNavigator<SettingParamList>();

export const SettingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={SettingParams.Setting}
        component={ProfileDetailsScreen}
      />
      <Stack.Screen
        name={SettingParams.DeleteAccount}
        component={ProfileDetailsScreen}
      />
    </Stack.Navigator>
  );
};
