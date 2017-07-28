//index.js 1.0.0 da error
//SyntaxError: Unexpected token import
require('babel-core/register')
require('babel-polyfill')
const oGraph = require('./my_modules/app')

console.log("oGraph",oGraph)