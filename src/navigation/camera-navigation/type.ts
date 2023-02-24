import {NO_PARAMS} from '../utils-navigation-types';
import {StackNavigationProp} from '@react-navigation/stack';

export enum CameraParams {
  Camera = 'Camera',
  Record = 'Record',
}
export type CameraParamList = {
  [CameraParams.Camera]: NO_PARAMS;
  [CameraParams.Record]: NO_PARAMS;
};

export type CameraNavigationType = StackNavigationProp<CameraParamList>;
