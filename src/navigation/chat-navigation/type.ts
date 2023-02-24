import {NO_PARAMS} from '../utils-navigation-types';
import {StackNavigationProp} from '@react-navigation/stack';

export enum ChatParams {
  Chat = 'Chat',
  ChatList = 'ChatList',
}
export type ChatParamList = {
  [ChatParams.Chat]: NO_PARAMS;
  [ChatParams.ChatList]: NO_PARAMS;
};

export type ChatNavigationType = StackNavigationProp<ChatParamList>;
