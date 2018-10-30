import React from 'react'
import PropType from 'prop-types'
import App from './App'
import store from '../store/index'
import {Provider} from 'react-redux'

function Root() {

  return(
    <Provider store={store}>
        <App />
    </Provider>
  )
}

Root.propTypes = {

}

export default Root
