import React, { Component } from 'react'
import moment from 'moment'

import DateTimePicker from '../DateTimePicker/index.jsx'

const noop = () => {}

class DateTimeRange extends Component {
	render () {
		const defaultStartTime = moment()

		const defaultEndTime = moment(defaultStartTime).add(1, 'h')

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
