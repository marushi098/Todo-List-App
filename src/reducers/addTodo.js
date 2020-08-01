import { ACTIVE } from '../actions/todos'

const addTodo = (state, action) => {
  const { todos, nextId } = state
  const { title } = action

  return Object.assign(
    {}, state, { nextId: nextId + 1 },
    { 
      todos: [...todos, { id: nextId, title, status: ACTIVE } ]
    }
  )
}

export default addTodo