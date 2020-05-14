const { join } = require('path')
const { readFileSync } = require('fs')
const { mergeTypes, mergeResolvers } = require('merge-graphql-schemas')

const { responseType } = require('./Response')
const { mailType, mailResolver } = require('./Mail')

const schema = readFileSync(join(__dirname, 'schema.gql'), { encoding: 'utf8'})

const types = [
    schema,
    responseType,
    mailType
]

const resolversDef = [
    mailResolver
]

const typeDefs = mergeTypes(types, {all: true})
const resolvers = mergeResolvers(resolversDef)

module.exports = {
    typeDefs,
    resolvers
}