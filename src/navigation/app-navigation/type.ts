import type {NavigatorScreenParams} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

import {TabParamList} from './../tab-navigation/type';
import {AuthParamList} from './../auth-navigation/type';
import {NestedScreenNavigator} from '../utils-navigation-types';

export enum AppNavigationParams {
  Auth = 'Auth',
  Tab = 'MainTab',
}

export type AppNavigationParamList = {
  [AppNavigationParams.Auth]: NavigatorScreenParams<AuthParamList>;
  [AppNavigationParams.Tab]: NestedScreenNavigator<TabParamList>;
};

export type AppNavigationType = StackNavigationProp<AppNavigationParamList>;
