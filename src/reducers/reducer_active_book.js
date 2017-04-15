//all reducers have arguments: state, action
//state argument applies only to this reducer - not to the entire application state
// this reducer is only responsible for the active book, therefore state only applies to active book
export default function(state = null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED': 
			//Don't mutate state!
			return action.payload;
	}
	return state;
}