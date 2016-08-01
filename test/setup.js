// transpile es6 --> es5 when 'require()ing' files (our tests)
require('babel-register')()

// create a fake DOM (browser) in memory
var jsdom = require('jsdom').jsdom

var exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}
