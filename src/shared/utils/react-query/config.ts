import {QueryClient} from '@tanstack/react-query';

const staleTime = 2 * 60 * 1000;
const cacheTime = 1000 * 60 * 60 * 24;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime,
      cacheTime,
      getNextPageParam: (_lastPage, allPages) =>
        allPages.flat().length === allPages.length * 20
          ? allPages.length + 1
          : false,
      onError: error => console.log('error:', error),
    },
  },
});
