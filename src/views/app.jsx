import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../redux/store'
import BasicRoute from '../router'
class App extends Component {

  render () {
    return (
      <div>
        <BasicRoute></BasicRoute>
      </div>
    )
  }
  componentDidMount () {
  }
}

export default connect(mapStateToProps)(App)
