import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../redux/store'
import { changeDrawerstate } from '../redux/action'
import BasicRoute from '../router'

import PageHeader from '../components/public/PageHeader'
import { Drawer, List } from 'antd-mobile'

class App extends Component {

  render () {
    const sidebar = (<List>
      {[0, 1, 2, 3, 4, 5].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >Category</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>)
    
    return (
      <div>
        <PageHeader />
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          contentStyle={{ color: '#A6A6A6', textAlign: 'center'}}
          sidebar={sidebar}
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
