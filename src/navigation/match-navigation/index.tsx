import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MatchParams, MatchParamList} from './type';
import {MatchScreen, MatchDetailsScreen} from '../../test';

const Stack = createNativeStackNavigator<MatchParamList>();

export const MatchNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={MatchParams.Match} component={MatchScreen} />
      <Stack.Screen
        name={MatchParams.MatchDetails}
        component={MatchDetailsScreen}
      />
    </Stack.Navigator>
  );
};
