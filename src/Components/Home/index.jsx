import React, { Component } from 'react'

import CreateEvent from '../CreateEvent/index.jsx'

class Home extends Component {
	render () {
		return (
			<div>
				<h1>Welcome to Code Cafe!</h1>
				<CreateEvent />
			</div>
		)
	}
}

export default Home
