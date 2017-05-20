export default (state = {}, action) => {
	switch (action.type) {
	case 'SET_EVENT_TIMES':
		return {
			start: action.start,
			end: action.end,
		}
	case 'SET_EVENT_NAME':
		return {
			name: action.name,
		}
	default:
		return state
	}
}
