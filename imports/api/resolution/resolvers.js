import Resolutions from "./resolutions"
import Goals from "../goal/goals"

export default {
  Query: {
    resolutions(obj, args, { userId }) {
      // console.log(userId)
      return Resolutions.find({
        userId
      }).fetch()
    }
  },
  Resolution: {
    goals: ({ _id }) => Goals.find({ resolutionId: _id }).fetch()
  },
  Mutation: {
    createResolution(obj, { name }, { userId }) {
      console.log("got here: " + name)
      const resolutionId = Resolutions.insert({
        name,
        userId
      })
      return Resolutions.findOne(resolutionId)
    },
    deleteResolution(obj, { _id }, context) {
      const result = Resolutions.remove({ _id })
      return { _id }
    },
    updateResolution(obj, { _id, name }, context) {
      const result = Resolutions.update({ _id }, { $set: { name } })
      return { _id }
    }
  }
}
