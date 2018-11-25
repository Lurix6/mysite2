import React from 'react'
import PropType from 'prop-types'
import App from './App'
import LoginOrSingIn from './LoginOrSingIn'
import store from '../store/index'
import {Provider} from 'react-redux'
import Example from './Example'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function Root() {


  return(
    <Provider store={store}>
        <Router>
          <Switch>
            <div>
              <Route path='/profil' component={App} />
              <Route exact path='/' component={LoginOrSingIn} />
            </div>
          </Switch>
        </Router>
    </Provider>
  )
}

Root.propTypes = {

}

export default Root
