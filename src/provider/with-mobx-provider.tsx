import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from '@Shared/theme';
import stores from '@Shared/store';

export const StoresContext = React.createContext(stores);

export const WithMobxProvider = (component: () => React.ReactNode) => () =>
  <PaperProvider theme={theme}>{component()}</PaperProvider>;
