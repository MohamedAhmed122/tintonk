import compose from 'compose-function';
import {withNavigationContainer} from './with-navigation';
import {WithUIPaper} from './with-ui-paper';
import {WithMobxProvider} from './with-mobx-provider';
import {WithQueryProvider} from './with-query-provider';

export const withProviders = compose(
  WithMobxProvider,
  WithQueryProvider,
  withNavigationContainer,
  WithUIPaper,
);
