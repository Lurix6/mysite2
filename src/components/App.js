import React, { Component } from 'react'
import Music from './Music'
import Menu from './Menu/Menu'
import Header from './Header'
import User from './Acount'
import Friends from './Friends'
import {Route, Switch} from 'react-router-dom'


class App extends Component {

  render() {
    const {match} = this.props


    return (
      <div className="block_header">
        <Header />
      <div className="siteBody">
        <div>
            <Menu />

                <Route exact  path='/' component={User}/>
                <Route  path='/music' component={Music}/>
                <Route  path='/friends' component={Friends} />

        </div>
      </div>
    </div>

    );

  }



}

export default App;
