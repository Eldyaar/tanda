import { createApi } from '@reduxjs/toolkit/query/react'
import { GraphQLClient } from 'graphql-request'
import { BaseQueryArgs, BaseQueryResult, CustomError, ProductDataResponse, queryBarcode } from '../models/models'

const graphqlClient = new GraphQLClient('https://api.tanda.kg/graphql/')

export const productApi = createApi({
   reducerPath: 'productApi',
   baseQuery: async ({ body }: BaseQueryArgs): Promise<BaseQueryResult | { error: CustomError }> => {
      try {
         const data = await graphqlClient.request(body)
         return { data }
      } catch (error) {
         return { error: { status: 'CUSTOM_ERROR', error } }
      }
   },
   endpoints: (builder) => ({
      getProductData: builder.query<ProductDataResponse, void>({
         query: () => ({
            body: queryBarcode,
         }),
      }),
   }),
});

export const { useGetProductDataQuery } = productApi