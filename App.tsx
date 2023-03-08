import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/navigation/app-navigation';
import {navigationRef} from './src/navigation';
import {theme} from './src/shared/theme';
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
