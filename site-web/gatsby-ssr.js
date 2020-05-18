import React from 'react'

import { ApolloProvider } from '@apollo/client'
import { client } from './src/api/cient'

export const wrapRootElement = ({element}) => {
  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  )
}