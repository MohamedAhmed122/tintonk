import {NO_PARAMS} from '../utils-navigation-types';
import {StackNavigationProp} from '@react-navigation/stack';

export enum AuthParams {
  Login = 'Login',
  Register = 'Register',
}
export type AuthParamList = {
  [AuthParams.Login]: NO_PARAMS;
  [AuthParams.Register]: NO_PARAMS;
};

export type AuthNavigationType = StackNavigationProp<AuthParamList>;
