import {NestedScreenNavigator} from './../utils-navigation-types';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';

import {ChatParamList} from '../chat-navigation/type';
import {HomeParamList} from './../home-navigation/type';
import {MatchParamList} from '../match-navigation/type';
import {DrawerParamList} from './../Drawer-navigation/type';
import {NotificationParamList} from './../notification-navigation/type';

export enum TabParams {
  Home = 'HomeTab',
  Chat = 'ChatTab',
  Match = 'MatchTab',
  Drawer = 'DrawerTab',
  Notification = 'NotificationTab',
}
export type TabParamList = {
  [TabParams.Home]: NavigatorScreenParams<HomeParamList>;
  [TabParams.Chat]: NavigatorScreenParams<ChatParamList>;
  [TabParams.Match]: NavigatorScreenParams<MatchParamList>;
  [TabParams.Drawer]: NestedScreenNavigator<DrawerParamList>;
  [TabParams.Notification]: NavigatorScreenParams<NotificationParamList>;
};

export type TabNavigationType = StackNavigationProp<TabParamList, TabParams>;
