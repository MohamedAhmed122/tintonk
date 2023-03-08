import {NO_PARAMS} from '../utils-navigation-types';
import {StackNavigationProp} from '@react-navigation/stack';

export enum ProfileParams {
  Profile = 'Profile',
  ProfileDetails = 'ProfileDetails',
}
export type ProfileParamList = {
  [ProfileParams.Profile]: NO_PARAMS;
  [ProfileParams.ProfileDetails]: NO_PARAMS;
};

export type ProfileNavigationType = StackNavigationProp<ProfileParamList>;
