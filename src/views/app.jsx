import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../redux/store'
import { changeDrawerstate } from '../redux/action'
import BasicRoute from '../router'

import PageHeader from '../components/public/PageHeader'
import Sidebar from '../components/Sidebar'
import { Drawer } from 'antd-mobile'

class App extends Component {

  render () {
    return (
      <div>
        <PageHeader />
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          contentStyle={{ color: '#A6A6A6', textAlign: 'center'}}
          sidebar={<Sidebar/>}
          open={this.props.drawerstate}
          onOpenChange={this.onOpenChange}>
            <BasicRoute></BasicRoute>
        </Drawer>
      </div>
    )
  }
  componentDidMount () {
  }

  onOpenChange = (...args) => {
    this.props.dispatch(changeDrawerstate(this.props.drawerstate))
  }
}

export default connect(mapStateToProps)(App)
