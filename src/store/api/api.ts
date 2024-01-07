import {
  buildCreateApi,
  coreModule,
  fetchBaseQuery,
  reactHooksModule,
} from '@reduxjs/toolkit/query/react';
import { IntrospectionQuery, getIntrospectionQuery } from 'graphql';
import { MainPageReq, MainPageRes } from '../../types/types';

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
    getSchema: query<IntrospectionQuery, string>({
      query: (url) => ({
        url: `${url}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: getIntrospectionQuery() }),
      }),
      keepUnusedDataFor: 9999,
      transformResponse: (res: { data: IntrospectionQuery }) => res.data,
    }),
  }),
});

export const { useLazyGetDataQuery, useLazyGetSchemaQuery } = MainPageApi;
