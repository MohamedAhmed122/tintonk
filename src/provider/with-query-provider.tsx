import React from 'react';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@Shared/utils/react-query';

export const WithQueryProvider = (component: () => React.ReactNode) => () =>
  <QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>;
