import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { api } from '../config/constants'
import fetch from 'isomorphic-fetch'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    fetch,
    uri: api.url
  })
})

export {
  client
}