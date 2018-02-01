import React, { Component } from "react"
import gql from "graphql-tag"
import { graphql } from "react-apollo"

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`
const deleteResolution = gql`
  mutation deleteResolution($id: String!) {
    deleteResolution(_id: $id) {
      _id
    }
  }
`

const updateResolution = gql`
  mutation updateResolution($id: String!, $name: String!) {
    updateResolution(_id: $id, name: $name) {
      _id
    }
  }
`

class ResolutionForm extends Component {
  submitForm = () => {
    this.props
      .createResolution({
        variables: {
          name: this.name.value
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
        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

export default graphql(createResolution, {
  name: "createResolution",
  options: {
    refetchQueries: ["Resolutions"]
  }
})(ResolutionForm)
