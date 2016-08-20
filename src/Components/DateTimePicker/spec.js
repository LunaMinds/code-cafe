/* globals describe, it */
var expect = require('expect')
var createDateTime = require('./createDateTime').default

describe('createDateTime', function () {
	describe('given only a time', function () {
		it('should return now with the updated time', function () {
			var time = new Date('1970 01 01 4:20')
			var newTime = createDateTime({time})
			expect(newTime.getHours()).toBe(4)
			expect(newTime.getMinutes()).toBe(20)
		})
	})

	describe('given only a date', function () {
		it('should return now with the updated date', function () {
			var date = new Date('2020 12 31')
			var newDate = createDateTime({date})
			expect(newDate.getFullYear()).toBe(2020)
			expect(newDate.getMonth()).toBe(11) // 'cause JS month off by one
			expect(newDate.getDate()).toBe(31)
		})
	})

	describe('given a date and time', function () {
		it('should return a new date time', function () {
			var date = new Date('2020 12 31')
			var time = new Date('1970 01 01 4:20')
			var newDateTime = createDateTime({date, time})
			expect(newDateTime.getFullYear()).toBe(2020)
			expect(newDateTime.getMonth()).toBe(11) // 'cause JS month off by one
			expect(newDateTime.getDate()).toBe(31)
			expect(newDateTime.getHours()).toBe(4)
			expect(newDateTime.getMinutes()).toBe(20)
		})
	})
})

