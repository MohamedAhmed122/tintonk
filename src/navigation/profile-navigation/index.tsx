import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProfileParams, ProfileParamList} from './type';
import {ProfileScreen, ProfileDetailsScreen} from '../../test';

const Stack = createNativeStackNavigator<ProfileParamList>();

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ProfileParams.Profile} component={ProfileScreen} />
      <Stack.Screen
        name={ProfileParams.ProfileDetails}
        component={ProfileDetailsScreen}
      />
    </Stack.Navigator>
  );
};
