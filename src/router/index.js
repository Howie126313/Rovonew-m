import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import PageHeader from '../components/public/PageHeader'

import Home from '../views/home'
import About from '../views/about'
import Contact from '../views/contact'
import Joinus from '../views/joinus'

const BasicRoute = () => (
  <div>
    <PageHeader />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/joinus" component={Joinus}></Route>
      </Switch>
    </BrowserRouter> 
  </div>
)

export default BasicRoute
