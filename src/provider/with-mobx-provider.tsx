import React from 'react';
import stores from '@Shared/store';

export const StoresContext = React.createContext(stores);

export const WithMobxProvider = (component: () => React.ReactNode) => () =>
  <StoresContext.Provider value={stores}>{component()}</StoresContext.Provider>;
