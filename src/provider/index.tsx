import compose from 'compose-function';

import {withNavigationContainer} from './with-navigation';
import {WithUIPaper} from './with-ui-paper';

export const withProviders = compose(WithUIPaper, withNavigationContainer);
