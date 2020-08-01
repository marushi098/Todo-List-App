
const deleteTodo = ( state, action ) => {
  const { todos } = state

  const index = todos.findIndex( todo => todo.id === action.id )

  return Object.assign(
    {}, state,
    {
      todos: [
        ...todos.slice( 0, index ),
        ...todos.slice( index + 1 )
      ]
    }
  )
}

export default deleteTodo