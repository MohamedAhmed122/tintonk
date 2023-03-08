import compose from 'compose-function';

import {withNavigationContainer} from './with-navigation';
import {WithUIPaper} from './with-ui-paper';
import {WithMobxProvider} from './with-mobx-provider';

export const withProviders = compose(
  WithMobxProvider,
  withNavigationContainer,
  WithUIPaper,
);
