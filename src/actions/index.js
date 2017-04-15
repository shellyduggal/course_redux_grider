export function selectBook(book) {
	//selectBook is an action creator, it needs to return an action (an object with a type property)
	//actions usually have two values: a type (purpose of the action, always uppercase) and a payload
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}