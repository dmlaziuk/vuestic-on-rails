const { environment } = require('@rails/webpacker')
const vue =  require('./loaders/vue')
const vuestic = require('./vuestic-admin')

environment.loaders.append('vue', vue)
environment.config.merge(vuestic)
module.exports = environment
