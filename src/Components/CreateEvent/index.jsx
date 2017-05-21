import DateTimeRange from '../DateTimeRange/index.jsx'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

import { setEventName } from '../../Actions'

export const Title = styled.label`
	&::after {
		content: ': ';
	}
`

export class CreateEvent extends React.Component {
	static propTypes = {
		setEventName: PropTypes.func.isRequired,
		eventName: PropTypes.string,
	}

	static defaultProps = {
		eventName: '',
	}

	render () {
		const { eventName } = this.props

		return (
			<div>
				<form>
					<Title htmlFor="eventName">Event Name</Title>
					<input
						onInput={this.updateEventName}
						value={eventName}
						name="eventName"
						type="text"
					/>
					<br />
					<Title htmlFor='area'>Meeting Area</Title>
					<select name='area'>
						<option value='val-01'>Value 01</option>
					</select>
					<br />
					<Title htmlFor='place'>Meeting Place</Title>
					<select name='place'>
						<option value='val-01'>Value 01</option>
					</select>
					<br />
						<DateTimeRange />
					<br />
					<Title htmlFor='max-people'>Maximum Attendees</Title>
					<input name='max-people' type='number'></input>
					<br />
					<Title htmlFor='tags'>Tags</Title>
					<input name='tags' type='text'></input>
					<br />
					<Title htmlFor='notes'>Notes</Title>
					<input name='notes' type='text'></input>
				</form>
			</div>
		)
	}

	updateEventName = ({ target }) => {
		this.props.setEventName(target.value)
	}
}

export const select = (state) => ({
	eventName: state.name,
})

export default connect(select, {
	setEventName,
})(CreateEvent)
