import React from 'react';
import {StoresContext} from '@Provider/with-mobx-provider';

export const useStores = () => React.useContext(StoresContext);
