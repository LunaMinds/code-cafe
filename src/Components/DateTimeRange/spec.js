/* eslint-env mocha */
import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import { DateTimeRange } from './index'

describe('<DateTimeRange>', () => {
	let props, range
	const setup = () => shallow(<DateTimeRange {...props} />)

	beforeEach(() => {
		props = {
			setEventTimes: expect.createSpy(),
		}

		range = setup()
	})

	it('has a start time by default', () => {
		const picker = range.find('DateTimePicker').at(0)
		const time = picker.prop('defaultDateTime')

		expect(time).toBeA(Date)
	})

	it('has an end time by default', () => {
		const picker = range.find('DateTimePicker').at(1)
		const time = picker.prop('defaultDateTime')

		expect(time).toBeA(Date)
	})

	it('defaults to an hour duration', () => {
		const start = range.find('DateTimePicker').at(0).prop('defaultDateTime')
		const end = range.find('DateTimePicker').at(1).prop('defaultDateTime')
		const hour = 1000 * 60 * 60

		expect(end.getTime() - start.getTime()).toBe(hour)
	})
})
