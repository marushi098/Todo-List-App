import { ACTIVE, COMPLETED } from '../actions/todos'

const updatedTodo = todo => 
  Object.assign( {}, todo, { status: todo.status === ACTIVE ? COMPLETED : ACTIVE } )

const toggleTodo = ( state, action ) => {
  const { todos } = state

  const index = todos.findIndex( todo => todo.id === action.id )
  const todo = todos[ index ]

  return Object.assign(
    {}, state, 
    {
      todos: [
        ...todos.slice( 0, index ),
        updatedTodo( todo ),
        ...todos.slice( index + 1 )
      ]
    }
  )
}

export default toggleTodo