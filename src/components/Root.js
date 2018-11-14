import React from 'react'
import PropType from 'prop-types'
import App from './App'
import LoginOrSingIn from './LoginOrSingIn'
import store from '../store/index'
import {Provider} from 'react-redux'
import Example from './Example'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

function Root() {


  return(
    <Provider store={store}>
        <Router>
          <Switch>
            <div>
              <App/>

            </div>
          </Switch>
        </Router>
    </Provider>
  )
}

Root.propTypes = {

}

export default Root
