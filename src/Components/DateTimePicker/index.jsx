import React, { Component } from 'react'
import TimePicker from 'material-ui/TimePicker'
import DatePicker from 'material-ui/DatePicker'
import createDateTime from './createDateTime'

export class DateTimePicker extends Component {
	constructor (props) {
		super(props)

		const now = new Date()

		this.state = {
			dateTime: this.props.defaultDateTime || now,
		}
	}

	render () {
		const now = new Date()

		return (
			<div>
				<DatePicker
					minDate={now}
					defaultDate={this.state.dateTime}
					onChange={this.setDate}
					id={this.props.id + 'date'} />

				<TimePicker
					pedantic={true}
					defaultTime={this.state.dateTime}
					onChange={this.setTime}
					id={this.props.id + 'time'} />
			</div>
		)
	}

	setDate = (event, date) => {
		const dateTime = createDateTime({
			date, time: this.state.dateTime,
		})

		this.setDateTime(dateTime)
	}

	setTime = (event, time) => {
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
	id: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	defaultDateTime: React.PropTypes.object,
}

export default DateTimePicker
