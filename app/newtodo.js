var React = require('react');

var NewTodo = React.createClass({

	getInitialState: function(){
		return {
			newTodo: ''
		};
	},

	onChange: function(e){
		this.setState({
			newTodo: e.target.value}
		);
	},

    handleSubmit: function(target) {
    	alert(this.state.newTodo);
    },

	render: function() {
		return (
			<header classNamme="header">
				<h1>Reactjs - Todos Application</h1>
				<form className="todo-form" onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.onChange} value={this.state.newTodo} className="new-todo" name="todo" placeholder="What needs to be done?" autofocus/>
				</form>
			</header>
		);
	}		

});

module.exports = NewTodo;