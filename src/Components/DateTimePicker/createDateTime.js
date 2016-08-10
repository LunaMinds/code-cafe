
export default ({date, time}) => {
	let newDateTime = new Date(date.getTime())
	newDateTime.setHours(time.getHours())
	newDateTime.setMinutes(time.getMinutes())
	return newDateTime
}
