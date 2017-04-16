import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import DateTimePicker from '../DateTimePicker/index.jsx'
import { setEventTimes } from '../../Actions/index.js'

const noop = () => {}

// exported for testing purposes
export class DateTimeRange extends Component {
	static propTypes = {
		setEventTimes: PropTypes.func.isRequired,
	}

	render () {
		const defaultStartTime = moment()

		const defaultEndTime = moment(defaultStartTime).add(1, 'h')

		this.props.setEventTimes(defaultStartTime, defaultEndTime)

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

const select = (state) => ({})

// Decorator
// exported as app function
// curried connect
// first call takes state and action
// second call takes component to apply the state & action
export default connect(select, {
	setEventTimes,
})(DateTimeRange)
