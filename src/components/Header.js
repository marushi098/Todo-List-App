import React, { Component } from 'react'

export default class Header extends Component {
  constructor() {
    super()
    this.state = { value: '' }
  }

  onKeyPress( event ) {
    if( event.charCode === 13 ) {
      this.props.addTodo( this.state.value )
      this.setState({ value: '' })
    }
  }

  onChange( event ) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <header>
        <h1>todos</h1>
        <input className="new-todo" 
          placeholder="What needs to be done?"
          value={this.state.value}
          onKeyPress={this.onKeyPress.bind(this)}
          onChange={this.onChange.bind(this)} />
      </header>
    )
  }
}
