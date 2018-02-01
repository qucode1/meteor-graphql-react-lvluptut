import { createApolloServer } from "meteor/apollo"
import { makeExecutableSchema } from "graphql-tools"

import ResolutionSchema from "../../api/resolution/resolution.graphql"

const testSchema = `
  type Query {
    hi: String,
    resolutions: [Resolution]
  }
`

const typeDefs = [testSchema, ResolutionSchema]

const resolvers = {
  Query: {
    hi() {
      return "Hello Yannick"
    },
    resolutions() {
      return [
        {
          _id: "abc",
          name: "get stuff done!"
        }
      ]
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({
  schema
})
