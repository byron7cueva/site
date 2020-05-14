import ApolloClient from 'apollo-boost'
import { api } from '../config/constants'

const client = new ApolloClient({
  uri: api.url
})

export {
  client
}