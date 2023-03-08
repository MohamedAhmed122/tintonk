import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ChatParams, ChatParamList} from './type';
import {ChatScreen, ChatListScreen} from '../../test';

const Stack = createNativeStackNavigator<ChatParamList>();

export const ChatNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ChatParams.Chat} component={ChatScreen} />
      <Stack.Screen name={ChatParams.ChatList} component={ChatListScreen} />
    </Stack.Navigator>
  );
};
