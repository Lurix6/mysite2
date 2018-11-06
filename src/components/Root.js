import React from 'react'
import PropType from 'prop-types'
import App from './App'
import store from '../store/index'
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

function Root() {


  return(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
  )
}

Root.propTypes = {

}

export default Root
