import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  todoItems() {
    const { todos, toggleTodo, deleteTodo, editTitle } = this.props

    return todos.map( (todo, index) =>
      <Todo key={`todo-${index}`} {...todo}
        editTitle={editTitle}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo} />
    )
  }

  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" onChange={this.props.toggleAll} />
        <ul className="todo-list">
          {this.todoItems()}
        </ul>
      </section>
    )
  }
}
