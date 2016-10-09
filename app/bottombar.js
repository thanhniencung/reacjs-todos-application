var React = require('react');

var ActionBar = React.createClass({
	render: function() {
		return (
			<footer className="footer">	
				<ul className="filters">
					<li><a  href="#">All</a></li>
					<li><a href="#" active>Active</a></li>
					<li><a  href="#" completed>Completed</a></li>
				</ul>
				<button className="clear-completed">Clear completed</button>
			</footer>
		);
	}

});

module.exports = ActionBar;