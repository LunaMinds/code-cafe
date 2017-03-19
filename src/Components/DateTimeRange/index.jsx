import React, { Component } from 'react'
import DateTimePicker from '../DateTimePicker/index.jsx'

const noop = () => {}

class DateTimeRange extends Component {
	render () {
		const defaultStartTime = new Date()
		const defaultEndTime = new Date(defaultStartTime.getTime())

		// FIXME: Subject to horrible time zone bugs.
		// Please replace with moment.js.
		defaultEndTime.setHours(defaultStartTime.getHours() + 1)

		return (
			<div>
				<DateTimePicker
					defaultDateTime={defaultStartTime}
					onChange={noop}
					key="start"
				/>

				<DateTimePicker
					defaultDateTime={defaultEndTime}
					onChange={noop}
					key="end"
				/>
			</div>
		)
	}
}

export default DateTimeRange
