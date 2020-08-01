import { COMPLETED } from '../actions/todos'

const clearCompleted = (state, action) => {
  const todos = state.todos.filter( todo => todo.status !== COMPLETED )

  return Object.assign( {}, state, { todos })
}

export default clearCompleted
