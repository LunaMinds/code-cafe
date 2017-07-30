import React from 'react'
import expect, { createSpy } from 'expect'
import { shallow } from 'enzyme'

import { DateTimeRange } from '../DateTimeRange.jsx'

describe('<DateTimeRange>', () => {
	let props, range
	const setup = () => shallow(<DateTimeRange {...props} />)

	beforeEach(() => {
		props = {
			setEventTimes: createSpy(),
			start: 123,
			end: 456,
		}

		range = setup()
	})

	it('defaults to an hour duration', () => {
		range.instance().componentWillMount()

		expect(props.setEventTimes).toHaveBeenCalled()

		const {start, end} = props.setEventTimes.calls[0].arguments[0]
		const hour = 1000 * 60 * 60

		expect(end - start).toBe(hour)
	})

	it('updates when the start time is changed', () => {
		const date = new Date(123)
		range.find('DateTimePicker').at(0).simulate('change', date)

		expect(props.setEventTimes).toHaveBeenCalled()
		expect(props.setEventTimes).toHaveBeenCalledWith({
			start: date.getTime(),
		})
	})

	it('updates when the end time is changed', () => {
		const date = new Date(456)
		range.find('DateTimePicker').at(1).simulate('change', date)

		expect(props.setEventTimes).toHaveBeenCalled()
		expect(props.setEventTimes).toHaveBeenCalledWith({
			end: date.getTime(),
		})
	})

	it('provides a default start and end date on mount', () => {
		range.instance().componentWillMount()

		expect(props.setEventTimes).toHaveBeenCalled()

		const {start, end} = props.setEventTimes.calls[0].arguments[0]

		expect(start).toBeA('number')
		expect(end).toBeA('number')
	})

	it('uses the correct start date time', () => {
		const dateTime = range.find('DateTimePicker').at(0).prop('value')

		expect(dateTime).toBeA(Date)
		expect(dateTime.getTime()).toBe(props.start)
	})

	it('uses the correct end date time', () => {
		const dateTime = range.find('DateTimePicker').at(1).prop('value')

		expect(dateTime).toBeA(Date)
		expect(dateTime.getTime()).toBe(props.end)
	})

	it('provides default date and time values', () => {
		props.start = undefined
		props.end = undefined
		range = setup()

		const startDateTime = range.find('DateTimePicker').at(0).prop('value')
		const endDateTime = range.find('DateTimePicker').at(1).prop('value')

		expect(isNaN(startDateTime.getTime())).toBe(false)
		expect(isNaN(endDateTime.getTime())).toBe(false)
	})
})
