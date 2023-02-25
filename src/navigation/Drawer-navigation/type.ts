import {StackNavigationProp} from '@react-navigation/stack';

import {SettingParamList} from './../setting-navigation/type';
import {ProfileParamList} from './../profile-navigation/type';
import {NavigatorScreenParams} from '@react-navigation/native';
import {CameraParamList} from '../camera-navigation/type';

export enum DrawerParams {
  CameraDrawer = 'CameraDrawer',
  ProfileDrawer = 'ProfileDrawer',
  SettingDrawer = 'SettingDrawer',
}
export type DrawerParamList = {
  [DrawerParams.CameraDrawer]: NavigatorScreenParams<CameraParamList>;
  [DrawerParams.ProfileDrawer]: NavigatorScreenParams<ProfileParamList>;
  [DrawerParams.SettingDrawer]: NavigatorScreenParams<SettingParamList>;
};

export type DrawerNavigationType = StackNavigationProp<DrawerParamList>;
