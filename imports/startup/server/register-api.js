import { createApolloServer } from "meteor/apollo"
import { makeExecutableSchema } from "graphql-tools"
import merge from "lodash/merge"

import ResolutionSchema from "../../api/resolution/resolution.graphql"
import ResolutionResolvers from "../../api/resolution/resolvers"

const testSchema = `
  type Query {
    hi: String,
    resolutions: [Resolution]
  }
`

const typeDefs = [testSchema, ResolutionSchema]

const testResolvers = {
  Query: {
    hi() {
      return "Hello Yannick"
    }
  }
}

const resolvers = merge(testResolvers, ResolutionResolvers)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({
  schema
})
