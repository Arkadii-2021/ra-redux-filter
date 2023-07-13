import { SEARCH_POSITION } from "./actions"


export function filterReducer(state='', action) {
	switch (action.type) {
		case SEARCH_POSITION:
			return action.payload
		
		default:
			return state
	}
};
