import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import DateTimePicker from './DateTimePicker/index.jsx'
import { setEventTimes } from '../Actions/index.js'

// exported for testing purposes
export class DateTimeRange extends Component {
	static propTypes = {
		setEventTimes: PropTypes.func.isRequired,
		start: PropTypes.number,
		end: PropTypes.number,
	}

	componentWillMount () {
		const defaultDateTimes = this.getDefaultDateTimes()

		this.props.setEventTimes(defaultDateTimes)
	}

	render () {
		const defaultDateTimes = this.getDefaultDateTimes()

		const dateTimes = {
			start: this.props.start || defaultDateTimes.start,
			end: this.props.end || defaultDateTimes.end,
		}

		const start = new Date(dateTimes.start)
		const end = new Date(dateTimes.end)

		return (
			<div>
				<DateTimePicker
					onChange={this.setStartDateTime}
					defaultDateTime={start}
					value={start}
					id="start-dt" />

				<DateTimePicker
					onChange={this.setEndDateTime}
					defaultDateTime={end}
					value={end}
					id="end-dt" />
			</div>
		)
	}

	getDefaultDateTimes () {
		const startTime = moment()
		const endTime = moment(startTime).add(1, 'h')

		return {
			start: Number(startTime),
			end: Number(endTime),
		}
	}

	setStartDateTime = (start) => {
		this.props.setEventTimes({start: start.getTime()})
	}

	setEndDateTime = (end) => {
		this.props.setEventTimes({end: end.getTime()})
	}
}

const select = (state) => ({
	start: state.start,
	end: state.end,
})

// Decorator
// exported as app function
// curried connect
// first call takes state and action
// second call takes component to apply the state & action
export default connect(select, {
	setEventTimes,
})(DateTimeRange)
