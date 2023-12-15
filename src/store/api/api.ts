import {
  buildCreateApi,
  coreModule,
  fetchBaseQuery,
  reactHooksModule,
} from '@reduxjs/toolkit/query/react';

type MainPageRes = {
  data: object;
};

type MainPageReq = {
  url: string;
  query: string;
  variables?: object;
  headersopt?: Record<string, string>;
};

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const MainPageApi = createApi({
  reducerPath: 'MainPageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: ({ query }) => ({
    getData: query<MainPageRes, MainPageReq>({
      // eslint-disable-next-line @typescript-eslint/no-shadow
      query: ({ url, query, variables, headersopt }) => ({
        url: `${url}`,
        method: 'POST',
        headers: headersopt,
        body: JSON.stringify({
          query,
          variables,
        }),
      }),
    }),
  }),
});

export const { useLazyGetDataQuery } = MainPageApi;
