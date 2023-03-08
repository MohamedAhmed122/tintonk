import {AppNavigationType} from './app-navigation/type';
import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<AppNavigationType>();

export const navigationService = {
  navigate: (...args: any) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(...args);
    }
  },
  goBack: () => {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  },
};
