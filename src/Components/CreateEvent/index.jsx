import React from 'react'
import './style.css'

export default class CreateEvent extends React.Component {
	render () {
		return <div>
			<h1>Create a new Event</h1>
			<form>
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
				<label htmlFor='start'>Start</label>
				<input name='start' type='datetime-local'></input>
				<br />
				<label htmlFor='end'>End</label>
				<input name='end' type='datetime-local'></input>
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
