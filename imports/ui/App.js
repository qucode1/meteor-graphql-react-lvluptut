import React from "react"
import gql from "graphql-tag"
import { graphql } from "react-apollo"

const App = props => <h1>{props.data.hi}</h1>

const hiQuery = gql`
  {
    hi
  }
`

export default graphql(hiQuery)(App)
