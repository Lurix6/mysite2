import React from 'react'
import './style.css'
import Header from './Header'
import LoginMainBody from './LoginMainBody'

export default class LoginOrSingIn extends React.Component {

	render(){

		return <div id='LoginPage'>
			<Header />
			<LoginMainBody />
		</div>



	}


}
