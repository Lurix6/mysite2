import React from 'react'
import {Link} from 'react-router-dom'

export default class LoginMainBody extends React.Component {

	render(){

		return <div id='loginMainBody'>
        <div id='aboutAs'>
        </div>
        <div id='forms'>
        	<div id='logIn'>
						<input id='phoneAndEmail' type='text' placeholder='Phone or email' />
						<input id='password' type='text' placeholder='Password' />
						<div><Link to='/user'><button id='logInBtn'>Log In</button></Link><p>Forgot your password?</p></div>
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


}
