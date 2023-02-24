import {NO_PARAMS} from '../utils-navigation-types';
import {StackNavigationProp} from '@react-navigation/stack';

export enum SettingParams {
  Setting = 'Setting',
  DeleteAccount = 'DeleteAccount',
}
export type SettingParamList = {
  [SettingParams.Setting]: NO_PARAMS;
  [SettingParams.DeleteAccount]: NO_PARAMS;
};

export type SettingNavigationType = StackNavigationProp<SettingParamList>;
