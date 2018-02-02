import React, { Component } from "react"
import gql from "graphql-tag"
import { graphql } from "react-apollo"

const createGoal = gql`
  mutation createGoal($name: String!, $resolutionId: String!) {
    createGoal(name: $name, resolutionId: $resolutionId) {
      _id
    }
  }
`
// const deleteResolution = gql`
//   mutation deleteResolution($id: String!) {
//     deleteResolution(_id: $id) {
//       _id
//     }
//   }
// `

// const updateResolution = gql`
//   mutation updateResolution($id: String!, $name: String!) {
//     updateResolution(_id: $id, name: $name) {
//       _id
//     }
//   }
// `

class GoalForm extends Component {
  submitForm = () => {
    this.props
      .createGoal({
        variables: {
          name: this.name.value,
          resolutionId: this.props.resolutionId
        }
      })
      //   .then(({ data }) => {
      // this.props.refetch()
      //   })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    return (
      <div>
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>Add</button>
      </div>
    )
  }
}

export default graphql(createGoal, {
  name: "createGoal"
})(GoalForm)
