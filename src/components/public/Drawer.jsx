import React, { Component } from 'react'
import { mapStateToProps } from '../../redux/store'
import { changeDrawerstate } from '../../redux/action'
import { connect } from 'react-redux'

import Sidebar from '../Sidebar'
import { Drawer } from 'antd-mobile'

class WebDrawer extends Component {
  render() {
    return (
      <Drawer
      className="my-drawer"
      style={{ minHeight: document.documentElement.clientHeight, position: 'fixed', left: '0', top: '0'}}
      contentStyle={{ color: '#A6A6A6', textAlign: 'center'}}
      sidebar={<Sidebar/>}
      open={this.props.drawerstate}
      onOpenChange={this.onOpenChange}>
      </Drawer>  
    )
  }

  onOpenChange = (...args) => {
    this.props.dispatch(changeDrawerstate(this.props.drawerstate))
  }
}

export default connect(mapStateToProps)(WebDrawer)
