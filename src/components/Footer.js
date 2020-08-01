import React, { Component } from 'react'
import Filter from './Filter'

import { ALL, ACTIVE, COMPLETED } from '../actions/todos'

export default class Footer extends Component {
  render() {
    const { count, currentFilter, changeFilter } = this.props

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{count}</strong>
          <span> </span>
          <span>items </span>
          <span >left</span>
        </span>

        <ul className="filters">
          <li>
            <Filter currentFilter={currentFilter}
              changeFilter={changeFilter}
              selection={ALL}>All</Filter>
          </li>
          <li>
            <Filter currentFilter={currentFilter}
              changeFilter={changeFilter}
              selection={ACTIVE}>Active</Filter>
          </li>
          <li>
            <Filter currentFilter={currentFilter}
              changeFilter={changeFilter}
              selection={COMPLETED}>Completed</Filter>
          </li>
        </ul>

        <button className="clear-completed"
          onClick={this.props.clearCompleted}>Clear completed</button>
      </footer>
    )
  }
}
