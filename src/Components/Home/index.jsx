import React, { Component } from 'react'
import DateTimeRange from '../DateTimeRange/index.jsx'
import CreateEvent from '../CreateEvent/index.jsx'

class Home extends Component {
	render () {
		return <div>
			<h1>Welcome to Code Cafe.</h1>

			<DateTimeRange />
			<hr></hr>
			<CreateEvent />
		</div>
	}
}

export default Home
