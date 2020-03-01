import React, { Component } from 'react'
import { HashRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps } from '../redux/store'

import PageHeader from '../components/public/PageHeader'
import { Drawer, List } from 'antd-mobile'

import Home from '../views/home'
import About from '../views/about'
import Contact from '../views/contact'
import Joinus from '../views/joinus'

class BasicRoute extends Component {

  render () {
    const sidebar = (<List>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
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
          enableDragHandle
          contentStyle={{ color: '#A6A6A6', textAlign: 'center'}}
          sidebar={sidebar}
          open={this.props.drawerOpen}
          onOpenChange={this.onOpenChange}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Route exact path="/joinus" component={Joinus}></Route>
            </Switch>
          </HashRouter> 
        </Drawer>
      </div>
    )
  }
  componentDidMount () {
  }

  onOpenChange = (...args) => {
    console.log(33333, args);
  }
}

// export default BasicRoute
export default connect(mapStateToProps)(BasicRoute)
