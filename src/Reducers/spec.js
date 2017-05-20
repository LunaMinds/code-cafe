/* eslint-env mocha */
import expect from 'expect'

import * as Actions from '../Actions'
import reducer from './index'

describe('reducer', () => {
	it('sets event times', () => {
		const start = 1
		const end = 2
		const action = Actions.setEventTimes({start, end})
		const state = reducer(undefined, action)

		expect(state).toEqual({
			start,
			end,
		})
	})

	it('does not set the start time if missing', () => {
		const start = 23
		const end = 29
		const action = Actions.setEventTimes({start})
		const state = reducer({end}, action)

		expect(state).toEqual({start, end})
	})

	it('does not set the end time if missing', () => {
		const start = 23
		const end = 29
		const action = Actions.setEventTimes({end})
		const state = reducer({start}, action)

		expect(state).toEqual({start, end})
	})

	it('does not overwrite unrelated state', () => {
		const initial = {location: 'Coffee Shop'}
		const action = Actions.setEventTimes({end: 3})
		const state = reducer(initial, action)

		expect(state).toContain(initial)
	})

	it('sets event name', () => {
		const name = 'Biggest Bacon Binge in the Known and Unknown Universe'
		const action = Actions.setEventName(name)
		const state = reducer(undefined, action)

		expect(state).toEqual({
			name,
		})
	})
})
