export default (state = {}, action) => {
	switch (action.type) {
	case 'SET_EVENT_TIMES':
		return {
			start: action.start,
			end: action.end,
		}
	default:
		return state
	}
}
