import React, { Component } from 'react'
import TimePicker from 'material-ui/TimePicker'
import DatePicker from 'material-ui/DatePicker'

class DateTimeRange extends Component {
	constructor () {
		super()

		this.state = {
			eventDate: new Date(),
			startTime: new Date(),
			endTime: new Date(),
		}
	}

	render () {
		const now = new Date()

		return <div>

			<DatePicker minDate={now}
				onChange={this.setDate} />

			<TimePicker
				defaultTime={this.state.startDate}
				pedantic={true}
				onChange={this.startTime}
				/>

			<TimePicker
				defaultTime={this.state.endDate}
				pedantic={true}
				onChange={this.endTime}
				/>

		</div>
	}

	setDate = (event, eventDate) => {
		this.setState(() => {
			return { eventDate }
		})
	}

	startTime = (event, startTime) => {
		this.setState(() => {
			return { startTime }
		})
	}

	endTime = (event, endTime) => {
		this.setState(() => {
			return { endTime }
		})
	}

}

export default DateTimeRange
