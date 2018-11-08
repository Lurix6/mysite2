import React, { Component } from 'react'
import Music from './Music'
import Menu from './Menu/Menu'
import Header from './Header'
import User from './Acount'
import {Route} from 'react-router-dom'


class App extends Component {

  render() {

    return (
      <div className="block_header">
        <Header />
      <div className="siteBody">
        <div>
            <Menu />
            <Route path='/user' expect component={User} />
            <Route path='/music' component={Music}/>

        </div>
      </div>
    </div>

    );

  }



}

export default App;
