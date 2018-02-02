import Goals from "./goals"

export default {
  Mutation: {
    createGoal(obj, { name, resolutionId }) {
      const goalId = Goals.insert({
        name,
        resolutionId,
        completed: false
      })
      return Goals.findOne(goalId)
    }
    // deleteGoal(obj, { _id }, context) {
    //   const result = Goals.remove({ _id })
    //   return { _id }
    // },
    // updateGoal(obj, { _id, name, completed }, context) {
    //   const result = Goals.update({ _id }, { $set: { name, completed } })
    //   return { _id }
    // }
  }
}
