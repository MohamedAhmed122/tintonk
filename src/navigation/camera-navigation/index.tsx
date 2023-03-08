import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CameraParams, CameraParamList} from './type';
import {CameraScreen, RecordScreen} from '../../test';

const Stack = createNativeStackNavigator<CameraParamList>();

export const CameraNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={CameraParams.Camera} component={CameraScreen} />
      <Stack.Screen name={CameraParams.Record} component={RecordScreen} />
    </Stack.Navigator>
  );
};
