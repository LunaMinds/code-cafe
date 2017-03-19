import React, { Component } from 'react'
import DateTimePicker from '../DateTimePicker/index.jsx'
import moment from 'moment'

const noop = () => {}

class DateTimeRange extends Component {
	render () {
		const defaultStartTime = moment()

		const defaultEndTime = moment(defaultStartTime).subtract(1, 'h')

		return (
			<div>
				<DateTimePicker
					defaultDateTime={defaultStartTime.toDate()}
					onChange={noop}
					key="start"
				/>

				<DateTimePicker
					defaultDateTime={defaultEndTime.toDate()}
					onChange={noop}
					key="end"
				/>
			</div>
		)
	}
}

export default DateTimeRange
