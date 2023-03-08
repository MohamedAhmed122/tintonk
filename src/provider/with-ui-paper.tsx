import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from '../shared/theme';

export const WithUIPaper = (component: () => React.ReactNode) => () =>
  <PaperProvider theme={theme}>{component()}</PaperProvider>;
