import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeParams, HomeParamList} from './type';
import {HomeScreen, VideoListScreen} from '../../test';

const Stack = createNativeStackNavigator<HomeParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={HomeParams.Home} component={HomeScreen} />
      <Stack.Screen name={HomeParams.VideoList} component={VideoListScreen} />
    </Stack.Navigator>
  );
};
