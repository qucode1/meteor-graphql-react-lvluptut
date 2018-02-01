const resolvers = {
  Query: {
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

export default resolvers
