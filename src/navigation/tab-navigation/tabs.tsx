import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ms, mvs} from 'react-native-size-matters';

import {HomeNavigator} from '../home-navigation';
import {MatchNavigator} from '../match-navigation';
import {ChatNavigator} from '../chat-navigation';
import {NotificationNavigator} from '../notification-navigation';
import {DrawerNavigator} from '../Drawer-navigation';
// Icons
import HomeIcon from '../../assets/svg/home.svg';
import FilledHomeIcon from '../../assets/svg/home-fill.svg';
import MessageIcon from '../../assets/svg/comment.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import NotificationIcon from '../../assets/svg/notification.svg';
import FilledNotificationIcon from '../../assets/svg/notification-filled.svg';
import PlusIcon from '../../assets/svg/gradient-plus.svg';
import {TabParams} from './type';

export const tabs = [
  {
    id: '1',
    component: HomeNavigator,
    name: TabParams.Home,
    options: {
      title: '',
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <IconContainer>
          {focused ? <FilledHomeIcon /> : <HomeIcon />}
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
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <IconContainer>
          <HeartIcon fill={focused ? '#82A2BF' : '#ffffff'} />
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
      tabBarIcon: () => (
        <View style={styles.plusIcon}>
          <PlusIcon width={35} height={35} />
        </View>
      ),
    },
  },
  {
    id: '4',
    component: ChatNavigator,
    name: TabParams.Chat,
    options: {
      title: '',
      tabBarIcon: () => (
        <IconContainer>
          <MessageIcon />
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
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <IconContainer>
          {focused ? <FilledNotificationIcon /> : <NotificationIcon />}
        </IconContainer>
      ),
    },
  },
];
const IconContainer = ({children}: {children: React.ReactNode}) => (
  <View style={{marginTop: mvs(20)}}>{children}</View>
);

const styles = StyleSheet.create({
  plusIcon: {
    backgroundColor: 'white',
    width: ms(65),
    height: mvs(65),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    borderWidth: ms(5),
    borderColor: 'rgb(242, 242, 242)',
    marginTop: -mvs(30),
  },
});
