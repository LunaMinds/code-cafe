
export default ({date, time}) => {
	date = date || new Date()
	time = time || new Date()

	const newDateTime = new Date(date.getTime())
	newDateTime.setHours(time.getHours())
	newDateTime.setMinutes(time.getMinutes())

	return newDateTime
}
