import React from "react"

//http://todomvc.com/examples/typescript-react/#/

class App extends React.Component {
	render() {
		return (
			<section className="todoapp">
					<header classNamme="header">
						<h1>Reactjs - Todos Application</h1>
						<form className="todo-form">
							<input className="new-todo" placeholder="What needs to be done?" autofocus />
						</form>
					</header>
					
					<section className="main">
						<ul className="todo-list">
							<li>
								<div className="view">
									<input className="toggle" type="checkbox"/>
									<label>Item 1</label>
									<button className="destroy"></button>
								</div>
							</li>

							<li>
								<div className="view">
									<input className="toggle" type="checkbox"/>
									<label>Item 1</label>
									<button className="destroy"></button>
								</div>
							</li>

							<li>
								<div className="view">
									<input className="toggle" type="checkbox"/>
									<label>Item 1</label>
									<button className="destroy"></button>
								</div>
							</li>

							<li>
								<div className="view">
									<input className="toggle" type="checkbox"/>
									<label>Item 1</label>
									<button className="destroy"></button>
								</div>
							</li>

							<li>
								<div className="view">
									<input className="toggle" type="checkbox"/>
									<label>Item 1</label>
									<button className="destroy"></button>
								</div>
							</li>
						</ul>
					</section>

					<footer className="footer">
						
						<ul className="filters">
							<li>
								<a  href="#">All</a>
							</li>
							<li>
								<a href="#" active>Active</a>
							</li>
							<li>
								<a  href="#" completed>Completed</a>
							</li>
						</ul>
						<button className="clear-completed" >Clear completed</button>
					</footer>
				</section>
		);
	}
}
export default App