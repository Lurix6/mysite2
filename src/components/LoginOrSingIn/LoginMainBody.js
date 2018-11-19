import React from 'react'
import {Link} from 'react-router-dom'

export default class LoginMainBody extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			  border: '',
				loginDate : {
					email: null,
					password:null,
					buttonActive: false
				}
		}
	}

	render(){


			  const style = { backgroundColor: this.state.border };
		return <div id='loginMainBody'>
        <div id='aboutAs'>
        </div>
        <div id='forms'>
        	<div id='logIn'>
						<input id='phoneAndEmail' type='text' placeholder='Phone or email' onChange={this.handlEmail}/>
						<input id='password' type='text' placeholder='Password'  size="30" onChange={this.handlPassword} />
						<div><Link to='/profil'><button  id='logInBtn'  disabled={!this.state.loginDate.buttonActive ? 'disabled' : null}>Log In</button></Link><p>Forgot your password?</p></div>
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

	handlEmail = (ev) => {
		const emailOrPass = ev.target.value
		if (emailOrPass.length > 10 && emailOrPass.length < 30) {
				if(this.testingEmail(emailOrPass)){
					this.setState({
						loginDate: {...this.state.loginDate, email: emailOrPass}
					})
					this.disabledButton()
				}
		}
	}

	handlPassword = (ev) => {
		const password = ev.target.value
			if (password.length > 5 && password.length < 20) {
					if (this.testingPassword(password)) {
						this.setState({
							loginDate: {...this.state.loginDate, password: password}
						})

						this.disabledButton()
					}
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

		setSomePropsNull = (props) =>{
			this.setState({
					loginDate: {...this.state.loginDate, props: null}
			})
			console.log(this.state.loginDate, ' ----------------------------');
		}

	redStyle = () => {
		this.setState({
			border: '#d1d1d1;'
		})
	}


}
