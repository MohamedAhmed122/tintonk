import {NO_PARAMS} from '../utils-navigation-types';
import {StackNavigationProp} from '@react-navigation/stack';

export enum MatchParams {
  Match = 'Match',
  MatchDetails = 'MatchDetails',
}
export type MatchParamList = {
  [MatchParams.Match]: NO_PARAMS;
  [MatchParams.MatchDetails]: NO_PARAMS;
};

export type MatchNavigationType = StackNavigationProp<MatchParamList>;
