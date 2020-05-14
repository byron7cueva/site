const { ApolloServer } = require('apollo-server-express')
const { Server } = require('./base/Server')
const { typeDefs, resolvers } = require('./graphql')

const apollo = new ApolloServer({
    typeDefs, resolvers
})

Server.instance.init()
apollo.applyMiddleware({app: Server.instance.app, path: '/api'})

function handleFatalError (error) {
    console.error(error.message)
    console.error(error.stack)
    process.exit()
}


process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)