export const setEventTimes = ({start, end}) => ({
	type: 'SET_EVENT_TIMES',
	start,
	end,
})

export const setEventName = (name) => ({
	type: 'SET_EVENT_NAME',
	name,
})
