import React, { Component } from 'react'
import TimePicker from 'material-ui/TimePicker'
import DatePicker from 'material-ui/DatePicker'
import createDateTime from './createDateTime'

class DateTimePicker extends Component {
	constructor (props) {
		super(props)

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
				onChange={ (event, date) =>
					this.setDate(date)
				} />

			<TimePicker
				pedantic={true}
				defaultTime={this.state.dateTime}
				onChange={ (event, time) =>
					this.setTime(time)
				} />

		</div>
	}

	setDate (date) {
		const dateTime = createDateTime({
			date, time: this.state.dateTime,
		})

		this.setDateTime(dateTime)
	}

	setTime (time) {
		const dateTime = createDateTime({
			date: this.state.dateTime, time,
		})

		this.setDateTime(dateTime)
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
