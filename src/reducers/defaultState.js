import { ALL, COMPLETED } from '../actions/todos'

const DEFAULT_STATE = {
  statusForToggle: COMPLETED,
  currentFilter: ALL,
  nextId: 0,
  todos: []
}

export default DEFAULT_STATE
