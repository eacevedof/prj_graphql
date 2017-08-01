//index.js 1.0.2
//https://github.com/steveluscher/zero-to-graphql/blob/master/zero-node/
//https://youtu.be/UBGzsb2UkeY?t=907
import express from "express"
import graphQLHTTP from "express-graphql"
import schema from "./schema"
const oExpress = express()

oExpress.use(
    graphQLHTTP({
        schema,
        graphiql:true,
    })
)

oExpress.listen(5000)


