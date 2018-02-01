import Resolutions from "./resolutions"

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch()
    }
  },
  Mutation: {
    createResolution(obj, { name }, context) {
      console.log("got here: " + name)
      const resolutionId = Resolutions.insert({
        name
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
