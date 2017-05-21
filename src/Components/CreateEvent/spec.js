import { CreateEvent, select } from './index'
import expect, { createSpy } from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<CreateEvent>', () => {
	let props
	const setup = () => shallow(<CreateEvent {...props} />)

	beforeEach(() => {
		props = {
			setEventName: createSpy(),
			id: 'create',
		}
	})

	describe('select', () => {
		it('returns the correct data', () => {
			const state = { name: 'My event name', unrelated: true }
			const result = select(state)

			expect(result).toEqual({
				eventName: state.name,
			})
		})
	})

	it('works', () => {
		setup()
	})

	it('updates the name on input', () => {
		const value = 'My super awesome event name'
		const event = { target: { value } }

		setup().find('input').filter({name: 'eventName'}).simulate('input', event)

		expect(props.setEventName).toHaveBeenCalled()
		expect(props.setEventName).toHaveBeenCalledWith(value)
	})

	it('sets the event name input', () => {
		props.eventName = 'existing input'

		const value = setup().find('input').filter({name: 'eventName'}).prop('value')

		expect(value).toBe(props.eventName)
	})
})
