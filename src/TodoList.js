import React, { Component } from 'react';

class TodoList extends Component {
	componentDidUpdate() { // lifecycle
		this.props.inputElement.current.focus() // updates once form is submited
	}

	render() {
		return(
			<div className="todolistMain">
				<div className="header">
					<form onSubmit={this.props.addItem}>
						<input
							ref={this.props.inputElement }
							placeholder="Task"
							value={this.props.currentItem.text}
							onChange={this.props.handleInput}
						/>
						<button type="submit">Add Task</button>
					</form>
				</div>
			</div>
		)
	}
}

export default TodoList