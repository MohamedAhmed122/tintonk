import {NO_PARAMS} from '../utils-navigation-types';
import {StackNavigationProp} from '@react-navigation/stack';

export enum HomeParams {
  Home = 'Home',
  VideoList = 'VideoList',
}
export type HomeParamList = {
  [HomeParams.Home]: NO_PARAMS;
  [HomeParams.VideoList]: NO_PARAMS;
};

export type HomeNavigationType = StackNavigationProp<HomeParamList>;
