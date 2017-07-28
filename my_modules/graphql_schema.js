//graphql_schema.js 1.0.1 
//https://www.npmjs.com/package/graphql
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
 
var oGqlSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        }
      }
    }
  })
})

var sQuery = "{ hello }"
 
graphql(oGqlSchema,sQuery).then(oResult => {
  console.log(oResult);
});