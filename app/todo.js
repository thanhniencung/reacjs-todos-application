var React = require('react');

var Todo = React.createClass({
	render: function() {
		return (
			<li>
				<div className="view">
					<input className="toggle" type="checkbox"/>
					<label>{this.props.name}</label>
					<button className="destroy"></button>
				</div>
			</li>
		);
	}

});

module.exports = Todo;