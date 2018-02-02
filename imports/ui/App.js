import React, { Fragment } from "react"
import gql from "graphql-tag"
import { graphql, withApollo } from "react-apollo"

import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import ResolutionForm from "./ResolutionForm"

const App = ({ loading, resolutions, user, client }) =>
  loading ? null : (
    <Fragment>
      {user._id ? (
        <button
          onClick={() => {
            Meteor.logout()
            client.resetStore()
          }}
        >
          Logout
        </button>
      ) : (
        <Fragment>
          <RegisterForm client={client} />
          <LoginForm client={client} />
        </Fragment>
      )}
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
    user {
      _id
    }
  }
`

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App))
