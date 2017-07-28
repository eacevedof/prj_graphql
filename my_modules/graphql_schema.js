//graphql_schema.js 1.0.1 
//https://www.npmjs.com/package/graphql
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
 
var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
})

var query = '{ hello }';
 
graphql(schema, query).then(result => {
 
  // Prints 
  // { 
  //   data: { hello: "world" } 
  // } 
  console.log(result);
 
});