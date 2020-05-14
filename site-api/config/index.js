if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const api = require('./api')
const smtp = require('./smtp')

module.exports = {
    api,
    smtp
}