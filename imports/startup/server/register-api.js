import { createApolloServer } from "meteor/apollo"
import { makeExecutableSchema } from "graphql-tools"
import merge from "lodash/merge"

import GoalSchema from "../../api/goal/goal.graphql"
import GoalResolvers from "../../api/goal/resolvers"
import ResolutionSchema from "../../api/resolution/resolution.graphql"
import ResolutionResolvers from "../../api/resolution/resolvers"
import UserSchema from "../../api/user/user.graphql"
import UserResolvers from "../../api/user/resolvers"

// hiio,
const typeDefs = [ResolutionSchema, GoalSchema, UserSchema]

const resolvers = merge(ResolutionResolvers, GoalResolvers, UserResolvers)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({
  schema
})
