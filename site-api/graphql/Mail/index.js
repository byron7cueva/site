'use strict'

const { join } = require('path')
const { readFileSync } = require('fs')
const Mutation  = require('./mutation')

const mailType = readFileSync(join(__dirname, 'type.gql'), { encoding: 'utf8'})
const mailResolver = { Mutation }

module.exports = {
    mailType,
    mailResolver
}