import React, { Component } from 'react'
import DateTimePicker from '../DateTimePicker/index.jsx'
import CreateEvent from '../CreateEvent/index.jsx'

class Home extends Component {
	render () {
		return <div>
			<h1>Welcome to Code Cafe.</h1>

			<DateTimePicker onChange={console.log} />
			<hr></hr>
			<CreateEvent />
		</div>
	}
}

export default Home
