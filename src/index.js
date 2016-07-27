import 'react-toolbox/lib/commons.scss' // <-- required css import
import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router } from 'react-router'
import AppRoute from './App/route'

ReactDOM.render((
  <Router children={AppRoute} history={browserHistory} />
), document.getElementById('root'))
