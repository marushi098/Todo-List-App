import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/root'

import App from './App'
import './index.css'
import DEFAULT_STATE from './reducers/defaultState'

const DATABASE = 'sharp-eagle'

const localStorage = ({ getState }) => next => action => {
  const result = next(action)
  const state = getState()

  if( state !== null ) {
    window.localStorage.setItem( DATABASE, JSON.stringify( state ))
  }

  return result
}

const localData = window.localStorage.getItem( DATABASE )
const initialState = JSON.parse( localData ) || DEFAULT_STATE

const store = createStore( reducer, initialState, applyMiddleware( localStorage ))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
