import {NO_PARAMS} from '../utils-navigation-types';
import {StackNavigationProp} from '@react-navigation/stack';

export enum NotificationParams {
  Notification = 'Notification',
}
export type NotificationParamList = {
  [NotificationParams.Notification]: NO_PARAMS;
};

export type NotificationNavigationType =
  StackNavigationProp<NotificationParamList>;
