export default {
  Query: {
    user(obj, args, { user }) {
      // console.log(userId)
      return user || {}
    }
  },
  User: {
    email: ({ emails }) => emails[0].address
  }
  //   Mutation: {
  //     createResolution(obj, { name }, { userId }) {
  //       console.log("got here: " + name)
  //       const resolutionId = Resolutions.insert({
  //         name,
  //         userId
  //       })
  //       return Resolutions.findOne(resolutionId)
  //     },
  //     deleteResolution(obj, { _id }, context) {
  //       const result = Resolutions.remove({ _id })
  //       return { _id }
  //     },
  //     updateResolution(obj, { _id, name }, context) {
  //       const result = Resolutions.update({ _id }, { $set: { name } })
  //       return { _id }
  //     }
  //   }
}
