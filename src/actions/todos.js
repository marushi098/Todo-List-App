export const ALL = 'all'
export const ACTIVE = 'active'
export const COMPLETED = 'completed'

export const ADD_TODO = 'add_todo'
export const TOGGLE_TODO = 'toggle_todo'
export const DELETE_TODO = 'delete_todo'
export const CHANGE_FILTER = 'change_filter'
export const EDIT_TITLE = 'edit_title'
export const CLEAR_COMPLETED = 'clear_completed'
export const TOGGLE_ALL = 'toggle-all'

const addTodo = title => ({
  type: ADD_TODO,
  title,
  status: ACTIVE
})

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter
})

const editTitle = (id, title) => ({
  type: EDIT_TITLE,
  id,
  title
})

const clearCompleted = () => ({
  type: CLEAR_COMPLETED
})

const toggleAll = status => ({
  type: TOGGLE_ALL,
  status
})

export { addTodo, toggleTodo, deleteTodo, changeFilter, editTitle, clearCompleted, toggleAll }
