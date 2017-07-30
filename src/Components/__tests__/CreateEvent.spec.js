import RaisedButton from 'material-ui/RaisedButton'
import { CreateEvent, select } from '../CreateEvent.jsx'
import { shallow } from 'enzyme'
import React from 'react'

describe('<CreateEvent>', () => {
	let props
	const setup = () => shallow(<CreateEvent {...props} />)

	beforeEach(() => {
		props = {
			setEventName: jest.fn(),
			createEvent: jest.fn(),
			mutate: jest.fn(),
			id: 'create',
		}
	})

	describe('select', () => {
		it('returns the correct data', () => {
			const state = { name: 'My event name', unrelated: true, start: 1, end: 42 }
			const result = select(state)

			expect(result).toEqual({
				end: state.end,
				eventName: state.name,
				start: state.start,
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

		expect(props.setEventName).toHaveBeenCalledWith(value)
	})

	it('sets the event name input', () => {
		props.eventName = 'existing input'

		const value = setup().find('input').filter({name: 'eventName'}).prop('value')

		expect(value).toBe(props.eventName)
	})

	describe('submit button', () => {
		const createHtmlEvent = () => ({
			preventDefault: jest.fn(),
			stopPropagation: jest.fn(),
		})

		it('calls create event action', () => {
			const event = createHtmlEvent()
			props.start = 1
			props.end = 42
			props.eventName = 'Festival of Sweet Potatoes and Bacon Awesomeness'
			setup().find(RaisedButton).filter({type: 'submit'}).simulate('click', event)
			expect(props.createEvent).toHaveBeenCalledWith({
				start: props.start,
				end: props.end,
				eventName: props.eventName,
			})
		})

		it('prevents reload', () => {
			const event = createHtmlEvent()
			setup().find(RaisedButton).filter({type: 'submit'}).simulate('click', event)
			expect(event.preventDefault).toHaveBeenCalled()
			expect(event.stopPropagation).toHaveBeenCalled()
		})
	})
})
