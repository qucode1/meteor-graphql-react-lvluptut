import React, { Fragment } from "react"
import gql from "graphql-tag"
import { graphql } from "react-apollo"

const App = props =>
  props.data.loading ? null : (
    <Fragment>
      <h1>{props.data.hi}</h1>
      <ul>
        {props.data.resolutions.map(resolution => (
          <li key={resolution._id}>{resolution.name}</li>
        ))}
      </ul>
    </Fragment>
  )

const hiQuery = gql`
  {
    hi
    resolutions {
      _id
      name
    }
  }
`

export default graphql(hiQuery)(App)
