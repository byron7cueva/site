'use strict'

const { join } = require('path')
const { readFileSync } = require('fs')

const responseType = readFileSync(join(__dirname, 'type.gql'), { encoding: 'utf8'})

module.exports = {
    responseType
}