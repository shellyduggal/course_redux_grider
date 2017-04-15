import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			)
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

//mapStateToProps() takes whatever is returned and puts it in props inside of BookList. Take state argument and returns an object that is available to component as this.props
//mapStateToProps() is the glue!
function mapStateToProps(state) {
	return {
		books: state.books
	};
} 

//Anything returned from bindActionCreators will be added to props on BookList container
function mapDispatchToProps(dispatch) {
	//Makes sure action creators are "dispatched" to all reducers
	return bindActionCreators({selectBook:selectBook}, dispatch);
}

//connect takes a Function and a Component and produces a Container (Smart Component)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);