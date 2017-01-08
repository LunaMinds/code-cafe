/* eslint-env mocha */
import React from 'react'
import expect, { createSpy } from 'expect'
import { mount } from 'enzyme'
import proxyquire from 'proxyquire'
import createDateTime from './createDateTime'

const mock = {
	TimePicker: createSpy().andReturn(<div/>),
	DatePicker: createSpy().andReturn(<div/>),
}
const stubby = proxyquire.noCallThru()
const DateTimePicker = stubby('./index', {
	'material-ui/TimePicker': mock.TimePicker,
	'material-ui/DatePicker': mock.DatePicker,
}).default

describe('The createDateTime utility', function () {
	context('given only a time', function () {
		it('should return now with the updated time', function () {
			const time = new Date('1970 01 01 4:20')
			const newTime = createDateTime({time})
			expect(newTime.getHours()).toBe(4)
			expect(newTime.getMinutes()).toBe(20)
		})
	})

	context('given only a date', function () {
		it('should return now with the updated date', function () {
			const date = new Date('2020 12 31')
			const newDate = createDateTime({date})
			expect(newDate.getFullYear()).toBe(2020)
			expect(newDate.getMonth()).toBe(11) // 'cause JS month off by one
			expect(newDate.getDate()).toBe(31)
		})
	})

	context('given a date and time', function () {
		it('should return a new date time', function () {
			const date = new Date('2020 12 31')
			const time = new Date('1970 01 01 4:20')
			const newDateTime = createDateTime({date, time})
			expect(newDateTime.getFullYear()).toBe(2020)
			expect(newDateTime.getMonth()).toBe(11) // 'cause JS month off by one
			expect(newDateTime.getDate()).toBe(31)
			expect(newDateTime.getHours()).toBe(4)
			expect(newDateTime.getMinutes()).toBe(20)
		})
	})
})

describe('<DateTimePicker />', function () {
	it('should report time changes', () => {
		// mock out the onChange of the main component
		const spy = createSpy()
		mount(<DateTimePicker onChange={spy}/>)

		// set var to capture mock's props
		const props = mock.TimePicker.calls[0].arguments[0]

		// log the last call to our spy
		console.log('pre-spy:', spy.calls[spy.calls.length - 1] || 'is currently undefined')

		// actual assertion that our spy has not yet been called
		expect(spy).toNotHaveBeenCalled()

		// do the awesomeness
		props.onChange()

		// again, log the last call to our spy
		console.log('post-spy:', spy.calls[spy.calls.length - 1].arguments)

		// actual assertion that our spy has now been called
		expect(spy).toHaveBeenCalled()
	})
})
