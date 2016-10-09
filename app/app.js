import React from "react"
import TodoList from "./todolist"
import NewTodo from "./newtodo"
import ActionBar from "./bottombar"

//http://todomvc.com/examples/typescript-react/#/
class App extends React.Component {
	render() {
		return (
			<section className="todoapp">		
					<NewTodo />
					<TodoList />
					<ActionBar />
			</section>
		);
	}
}
export default App