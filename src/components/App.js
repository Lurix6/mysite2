import React, { Component } from 'react'
import Music from './Music'
import Menu from './Menu/Menu'
import Header from './Header'
import User from './Acount'
import Friends from './Friends'
import Settings from './Settings'
import {Route, Switch} from 'react-router-dom'


class App extends Component {

  render() {

    return (
      <div className="block_header">
        <Header />
      <div className="siteBody">
        <div>
            <Menu />
                <Route exact  path='/account' component={User}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/music' component={Music}/>
                <Route path='/friends' component={Friends} />

        </div>
      </div>
    </div>

    );

  }



}

export default App;
