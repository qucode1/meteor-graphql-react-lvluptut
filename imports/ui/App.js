import React, { Fragment } from "react"
import gql from "graphql-tag"
import { graphql } from "react-apollo"

import ResolutionForm from "./ResolutionForm"

const App = ({ loading, resolutions }) =>
  loading ? null : (
    <Fragment>
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
})(App)
