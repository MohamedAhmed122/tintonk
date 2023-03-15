import {NO_PARAMS} from '../utils-navigation-types';
import {StackNavigationProp} from '@react-navigation/stack';

export enum AuthParams {
  Login = 'Login',
  Welcome = 'Welcome',
  Register = 'Register',
  PhoneAuthentication = 'PhoneAuthentication',
}
export type AuthParamList = {
  [AuthParams.Login]: NO_PARAMS;
  [AuthParams.Register]: NO_PARAMS;
  [AuthParams.Welcome]: NO_PARAMS;
  [AuthParams.PhoneAuthentication]: NO_PARAMS;
};

export type AuthNavigationType = StackNavigationProp<AuthParamList>;
