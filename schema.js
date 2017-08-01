//schema.js 1.0.0
//https://github.com/steveluscher/zero-to-graphql/tree/master/zero-node
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} from "graphql"

import fetch from "node-fetch"

const BASE_URL = "http://localhost:8000"

function getPersonByURL(relativeURL){
    return fetch(`${BASE_URL}/people/${relativeURL}/`)
        .then(res=>res.json())
        .then(json => json.person)
}

const PersonType = new GraphQLObjectType({
    name: "Person",
    description: "...",
    fields:() =>({
        firstName:{
            type: GraphQLString,
            resolve: (person) => person.first_name,
        },
        lastName:{
            type: GraphQLString,
            resolve: (person) => person.last_name,          
        },
        email:{type: GraphQLString},
        username:{type: GraphQLString},
        id:{type: GraphQLString},
        friends:{
            type: new GraphQLList(PersonType),
            resolve: (person) => 
        }
    })

})

const QueryType = new GraphQLObjectType({
    name: "Query",
    description: "...",
    fields: () => ({
        person: {
            type: PersonType,
            args: {
                id: {type:GraphQLString}
            },
            resolve: (root,args) => getPersonByURL()
        }
    })
})

export default new GraphQLSchema({
    query: QueryType,
})