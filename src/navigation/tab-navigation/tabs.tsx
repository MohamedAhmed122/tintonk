import React from 'react';
import {StyleSheet, View} from 'react-native';
import {mvs} from 'react-native-size-matters';

import {HomeNavigator} from '../home-navigation';
import {MatchNavigator} from '../match-navigation';
import {ChatNavigator} from '../chat-navigation';
import {NotificationNavigator} from '../notification-navigation';
import {DrawerNavigator} from '../Drawer-navigation';
// Icons
import {TabParams} from './type';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {theme} from '@Shared/theme';
export const TAB_HEIGHT = mvs(65);

type TabProps = {focused: boolean; color: string};

export const tabs = [
  {
    id: '1',
    component: HomeNavigator,
    name: TabParams.Home,
    options: {
      title: '',
      tabBarIcon: ({focused, color}: TabProps) => (
        <IconContainer focused={focused}>
          <FontAwesome5 name={'hand-holding-heart'} size={30} color={color} />
        </IconContainer>
      ),
    },
  },
  {
    id: '2',
    component: MatchNavigator,
    name: TabParams.Match,
    options: {
      title: '',
      tabBarIcon: ({focused, color}: TabProps) => (
        <IconContainer focused={focused}>
          <Entypo name="location" size={30} color={color} />
        </IconContainer>
      ),
    },
  },
  {
    id: '3',
    component: DrawerNavigator,
    name: TabParams.Drawer,
    options: {
      title: '',
      tabBarIcon: ({focused, color}: TabProps) => (
        <IconContainer focused={focused}>
          <Entypo
            color={color}
            size={30}
            name={focused ? 'circle-with-plus' : 'plus'}
          />
        </IconContainer>
      ),
    },
  },
  {
    id: '4',
    component: ChatNavigator,
    name: TabParams.Chat,
    options: {
      title: '',
      tabBarIcon: ({focused, color}: TabProps) => (
        <IconContainer focused={focused}>
          <MaterialIcons color={color} size={32} name={'group'} />
        </IconContainer>
      ),
    },
  },

  {
    id: '5',
    component: NotificationNavigator,
    name: TabParams.Notification,
    options: {
      title: '',
      tabBarIcon: ({focused, color}: TabProps) => (
        <IconContainer focused={focused}>
          <Ionicons
            color={color}
            size={30}
            name={
              focused ? 'md-chatbubble-ellipses' : 'chatbubble-ellipses-outline'
            }
          />
        </IconContainer>
      ),
    },
  },
];
const IconContainer = ({
  children,
  focused,
}: {
  children: React.ReactNode;
  focused: boolean;
}) => (
  <View style={[styles.iconContainer, focused && styles.ActiveIcon]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  iconContainer: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    marginTop: TAB_HEIGHT / 1.7,
  },
  ActiveIcon: {
    backgroundColor: theme.colors.primary,
  },
});
