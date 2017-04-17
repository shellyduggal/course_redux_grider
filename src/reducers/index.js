import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//tells application how to create state
//any key to the object that we provide to combineReducers ends up as a key on our global state
const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;



//application state is assembled entirely by its reducers