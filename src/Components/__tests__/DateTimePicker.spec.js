import React from 'react'
import { shallow } from 'enzyme'

import { DateTimePicker } from '../DateTimePicker/index.jsx'

describe('<DateTimePicker>', function () {
	let props, picker
	const setup = () => shallow(<DateTimePicker {...props} />)

	beforeEach(() => {
		props = {
			id: 'date-time-picker',
			onChange: jest.fn(),
		}

		picker = setup()
	})

	it('should report time changes', () => {
		expect(props.onChange).not.toHaveBeenCalled()
		picker.find('TimePicker').simulate('change')
		expect(props.onChange).toHaveBeenCalled()
	})

	it('should report date changes', () => {
		expect(props.onChange).not.toHaveBeenCalled()
		picker.find('DatePicker').simulate('change')
		expect(props.onChange).toHaveBeenCalled()
	})

	it('should report correct date on change', () => {
		const date = new Date('2020 12 31')

		picker.find('DatePicker').props().onChange(null, date)
		const [updatedDate] = props.onChange.mock.calls[0]

		expect(updatedDate.getFullYear()).toBe(2020)
		expect(updatedDate.getMonth()).toBe(11) // 'cause JS month off by one
		expect(updatedDate.getDate()).toBe(31)
	})

	it('should return now with the updated time', () => {
		const time = new Date('1970 01 01 4:20')

		picker.find('TimePicker').props().onChange(null, time)
		const [updatedTime] = props.onChange.mock.calls[0]

		expect(updatedTime.getHours()).toBe(4)
		expect(updatedTime.getMinutes()).toBe(20)
	})

	it('should report both date & time changes', () => {
		const date = new Date('2020 12 31')
		const time = new Date('1970 01 01 4:20')

		picker.find('DatePicker').props().onChange(null, date)
		picker.find('TimePicker').props().onChange(null, time)
		const [updatedDateTime] = props.onChange.mock.calls[1]

		expect(updatedDateTime.getFullYear()).toBe(2020)
		expect(updatedDateTime.getMonth()).toBe(11) // 'cause JS month off by one
		expect(updatedDateTime.getDate()).toBe(31)
		expect(updatedDateTime.getHours()).toBe(4)
		expect(updatedDateTime.getMinutes()).toBe(20)
	})
})
