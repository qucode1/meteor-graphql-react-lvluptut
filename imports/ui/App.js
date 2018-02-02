import React, { Fragment } from "react"
import gql from "graphql-tag"
import { graphql, withApollo } from "react-apollo"

import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import ResolutionForm from "./ResolutionForm"

const App = ({ loading, resolutions, client }) =>
  loading ? null : (
    <Fragment>
      <button
        onClick={() => {
          Meteor.logout()
          client.resetStore()
        }}
      >
        Logout
      </button>
      <RegisterForm client={client} />
      <LoginForm client={client} />
      <ResolutionForm />
      <ul>
        {resolutions.map(resolution => (
          <li key={resolution._id}>{resolution.name}</li>
        ))}
      </ul>
    </Fragment>
  )

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
    }
  }
`

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App))
