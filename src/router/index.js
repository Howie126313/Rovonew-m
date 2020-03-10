import React from 'react'
import { HashRouter, Route, Switch} from 'react-router-dom'

import Home from '../views/home'
import About from '../views/about'
import Contact from '../views/contact'
import Joinus from '../views/joinus'
import Drawer from '../components/public/Drawer'
import PageHeader from '../components/public/PageHeader'

const BasicRoute = function () {
  return (
    <HashRouter>
      <PageHeader />
      <Drawer></Drawer>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/joinus" component={Joinus}></Route>
      </Switch>
    </HashRouter> 
  )
}

export default BasicRoute
