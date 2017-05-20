import React from 'react'
import DateTimeRange from '../DateTimeRange/index.jsx'
import './style.css'

export default class CreateEvent extends React.Component {
	render () {
		return <div>
			<form>
				<label htmlFor="eventName">Event Name</label>
				<input name="eventName" type="text"/>
				<br />
				<label htmlFor='area'>Meeting Area</label>
				<select name='area'>
					<option value='val-01'>Value 01</option>
				</select>
				<br />
				<label htmlFor='place'>Meeting Place</label>
				<select name='place'>
					<option value='val-01'>Value 01</option>
				</select>
				<br />
					<DateTimeRange />
				<br />
				<label htmlFor='max-people'>Maximum Attendees</label>
				<input name='max-people' type='number'></input>
				<br />
				<label htmlFor='tags'>Tags</label>
				<input name='tags' type='text'></input>
				<br />
				<label htmlFor='notes'>Notes</label>
				<input name='notes' type='text'></input>

			</form>
		</div>
	}
}
