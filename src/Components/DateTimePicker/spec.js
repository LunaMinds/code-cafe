/* eslint-env mocha */
import expect from 'expect'
import { shallow } from 'enzyme'
import createDateTime from './createDateTime'

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
