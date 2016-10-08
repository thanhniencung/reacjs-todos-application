var React = require('react');
import Todo from './Todo'

var TodoList = React.createClass({
	render: function() {
		return (
			<section className="main">
				<ul className="todo-list">
					<Todo name="Todo 1"/>
				</ul>
			</section>
		);
	}

});

module.exports = TodoList;