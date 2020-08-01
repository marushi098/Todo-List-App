const changeFilter = (state, action) => {
  return Object.assign( {}, state, { currentFilter: action.filter })
}

export default changeFilter
