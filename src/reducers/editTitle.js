const editTitle = (state, action) => {
  const { id, title } = action

  const index = state.todos.findIndex( todo => todo.id === id )
  const todo = state.todos[ index ]

  const todos = [
    ...state.todos.slice( 0, index ),
    Object.assign( {}, todo, { title }),
    ...state.todos.slice( index + 1 )
  ]

  return Object.assign( {}, state, { todos } )
}

export default editTitle
