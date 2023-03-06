import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../navigation';

export const withNavigationContainer =
  (component: () => React.ReactNode) => () =>
    (
      <NavigationContainer ref={navigationRef}>
        {component()}
      </NavigationContainer>
    );
