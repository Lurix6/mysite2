import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import {loginMainProfile} from '../../AC'
import {connect} from 'react-redux'
import { browserHistory } from 'react-router-dom';
import { push } from 'react-router-redux';
import PropTypes from "prop-types";

class LoginMainBody extends React.Component {

	static contextTypes = {
	router: PropTypes.object
}

	constructor(props){
		super(props)

		this.state = {
				loginDate : {
					email: null,
					password:null
				},
				id: null
		}
	}

	render(){
				const inputStyleRed = {borderColor: 'red'}

		return <div id='loginMainBody'>
        <div id='aboutAs'>
        </div>
        <div id='forms'>
        	<div id='logIn'>
						<input id='phoneAndEmail' type='text' style={this.state.loginDate.email ? null : inputStyleRed} placeholder='Phone or email' onChange={this.changeEmail}/>
						<input id='password' type='text' style={this.state.loginDate.password ? null : inputStyleRed} placeholder='Password' onChange={this.changePassword} />
						<div><Link to={this.state.id ? this.state.id : '/'}><button onClick={this.login}>Log In</button></Link><p>Forgot your password?</p></div>
						<div></div>
					</div>
          <div id='signUp'>
							<p>Sign up</p>
							<input id='firstName' type='text' placeholder='Your first name'/>
							<input id='lastName' type='text' placeholder='Your last name'/>
							<p id='dateTxt'>Date of birth</p>
							<div id='birthDay'><input type='text' placeholder='Day'/><input type='text' placeholder='Mounth'/><input type='text' placeholder='Year'/></div>
							<button>Continue registration</button>
					</div>
        </div>
		</div>



	}

	changeEmail = (ev) =>{
		const email = ev.target.value
		if (this.testingEmail(email)) {
			this.setState({
				loginDate: {...this.state.loginDate, email: email }
			})

		}else {
			this.setState({
				loginDate: {...this.state.loginDate, email: null }
			})
		}

	}
	changePassword = (ev) =>{
		const password = ev.target.value
		if (this.testingPassword(password)) {
				this.setState({
					loginDate: {...this.state.loginDate, password: password}
				})
		}else {
				this.setState({
					loginDate: {...this.state.loginDate, password: null}
				})

		}

	}

	login = () => {
		const account = this.props.allProfile.filter(element => element.password === this.state.loginDate.password && element.email === this.state.loginDate.email)
		if (account.length > 0) {
			this.setState({
				id: '/profil/id/'+account[0].id
			})
			this.props.loginMainProfile(account[0]);
		}
	}

	testingEmail = (email) =>{
		const filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
		return filter.test(email)
	}

	testingPassword = (password) =>{
		 const filter  = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/
		 return filter.test(password)
	}

		disabledButton = () => {
			if (this.state.loginDate.email && this.state.loginDate.password) {
					this.setState({
							loginDate: {...this.state.loginDate, buttonActive: true}
					})
			}
		}


}

export default connect(state =>({
		allProfile : state.accounts
}),{loginMainProfile})(withRouter(LoginMainBody))
