import React from 'react'
import PropType from 'prop-types'
import App from './App'
import LoginOrSingIn from './LoginOrSingIn'
import store from '../store/index'
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Root() {


  return(
    <Provider store={store}>
        <Router>
          <div>

                <Route path='/' component={App} />
          </div>
        </Router>
    </Provider>
  )
}

Root.propTypes = {

}

export default Root
