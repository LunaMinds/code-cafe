export default (state = {}, action) => {
	switch (action.type) {
	case 'SET_EVENT_TIMES':
		return {
			...state,
			start: action.start || state.start,
			end: action.end || state.end,
		}
	case 'SET_EVENT_NAME':
		return {
			...state,
			name: action.name,
		}
	default:
		return state
	}
}
