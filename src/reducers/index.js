import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//tells application how to create state
const rootReducer = combineReducers({
	books: BooksReducer
});

export default rootReducer;
