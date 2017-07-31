import RaisedButton from 'material-ui/RaisedButton'
import React from 'react'

export class Login extends React.Component {
	render () {
		return (
			<div>
				<label>
					<p>Username:</p>
					<input placeholder="Username" />
				</label>

				<label>
					<p>Password:</p>
					<input type="password" placeholder="Password" />
				</label>

				<div>
					<RaisedButton primary>Log in</RaisedButton>
				</div>
			</div>
		)
	}
}

export default Login
