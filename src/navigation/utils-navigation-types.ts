import {ParamListBase} from '@react-navigation/native';

export type NestedScreenNavigator<T extends ParamListBase> = {
  [K in keyof T]: {screen: K; params?: T[K]};
}[keyof T];

export type NO_PARAMS = undefined;
