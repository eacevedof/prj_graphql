//index.js 1.0.1
//https://www.npmjs.com/package/graphql
require('babel-core/register')
require('babel-polyfill')
const oGraphSchema = require('./my_modules/graphql_schema')

console.log("oGraphSchema",oGraphSchema)

var query = '{ hello }';
 
oGraphSchema(schema, query).then(result => {
 
  // Prints 
  // { 
  //   data: { hello: "world" } 
  // } 
  console.log(result);
 
});