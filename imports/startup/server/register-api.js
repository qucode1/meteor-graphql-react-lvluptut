import { createApolloServer } from "meteor/apollo"
import { makeExecutableSchema } from "graphql-tools"
import merge from "lodash/merge"

import ResolutionSchema from "../../api/resolution/resolution.graphql"
import ResolutionResolvers from "../../api/resolution/resolvers"
import UserSchema from "../../api/user/user.graphql"
import UserResolvers from "../../api/user/resolvers"

const testSchema = `
  type Query {
    hi: String,
    resolutions: [Resolution],
    user: User
  }
`
// hii,
const typeDefs = [testSchema, ResolutionSchema, UserSchema]

const testResolvers = {
  Query: {
    hi() {
      return "Hello Yannick"
    }
  }
}

const resolvers = merge(testResolvers, ResolutionResolvers, UserResolvers)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({
  schema
})
