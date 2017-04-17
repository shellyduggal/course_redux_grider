//all reducers have two arguments: current state, action
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


//ES6: If an argument passed into a function is undefined, set it to null - get it to do this by setting argument=null in function declaration