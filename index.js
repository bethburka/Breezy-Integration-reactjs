import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import Description from './modules/Description'
import Forms from './modules/Forms'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="Position/:id" component={Description}/>
    <Route path="/forms" component={Forms}/>

  </Router>
), document.getElementById('app'))
