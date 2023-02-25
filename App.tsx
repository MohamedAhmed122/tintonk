import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/navigation/app-navigation';
import {navigationRef} from './src/navigation';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
}
