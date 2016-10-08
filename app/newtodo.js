var React = require('react');

var NewTodo = React.createClass({

	render: function() {
		return (
			<header classNamme="header">
				<h1>Reactjs - Todos Application</h1>
				<form className="todo-form">
					<input className="new-todo" placeholder="What needs to be done?" autofocus />
				</form>
			</header>
		);
	}
});

module.exports = NewTodo;