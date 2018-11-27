import React, { Component } from 'react'
import Music from './Music'
import Menu from './Menu/Menu'
import Header from './Header'
import User from './Acount'
import Friends from './Friends'
import Settings from './Settings'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeSiteStyle} from '../AC'


class App extends Component {


  render() {

    return (
      <div className="block_header">
        <Header />
      <div className="siteBody">
        <div>
            <Menu />
                <Route exact  path='/profil/id/:id' component={User}/>
                <Route exact  path='/profil/myProfile' component={User}/>
                <Route path='/profil/settings' component={Settings}/>
                <Route path='/profil/music' component={Music}/>
                <Route path='/profil/friends' component={Friends} />
        </div>
      </div>
    </div>

    );

  }

  componentWillMount(){
    if (localStorage.getItem(this.props.loginProfil.id)) {
        this.props.changeSiteStyle(localStorage.getItem(this.props.loginProfil.id))
    }
  }
}

export default connect(state => ({
    loginProfil: state.loginProfil
}), {changeSiteStyle})(App);
