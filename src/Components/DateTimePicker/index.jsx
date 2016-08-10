import React, { Component } from 'react'
import TimePicker from 'material-ui/TimePicker'
import DatePicker from 'material-ui/DatePicker'
import createDateTime from './createDateTime'

class DateTimePicker extends Component {
	contructor () {
		super()

		const now = new Date()

		this.state = {
			dateTime: this.props.defaultDateTime || now,
		}
	}

	render () {
		const now = new Date()

		return <div>

			<DatePicker
				minDate={now}
				defaultDate={this.state.dateTime}
				onChange={(event, date) => this.setState({ date })}
				/>

			<TimePicker
				pedantic={true}
				defaultTime={this.state.dateTime}
				onChange={(event, time) => this.setState({ time })}
				/>

		</div>
	}

	setDate (event, date) {
		this.setDateTime(createDateTime({date, time: this.state.dateTime}))
	}

	setTime (event, time) {
		this.setDateTime(createDateTime({date: this.state.dateTime, time}))
	}

	setDateTime (dateTime) {
		this.setState({dateTime})
		this.props.onChange(dateTime)
	}
}

DateTimePicker.propTypes = {
	onChange: React.PropTypes.func.isRequired,
	defaultDateTime: React.PropTypes.object,
}

export default DateTimePicker
