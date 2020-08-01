import React, { Component } from 'react'

export default class EditableTitle extends Component {
  constructor( props ) {
    super( props )

    this.state = { editing: false, value: props.title }
  }

  clickHandler() {
    this.setState({ editing: true })
  }

  onKeyPress( event ) {
    const { id, editTitle } = this.props

    if( event.charCode === 13 ) {
      editTitle( id, event.target.value )

      this.setState({ editing: false })
    }
  }

  onChange( event ) {
    this.setState({ value: event.target.value })
  }

  render() {
    const { title } = this.props

    if( this.state.editing ) {
      return (
        <input className="edit"
          value={this.state.value}
          onKeyPress={this.onKeyPress.bind(this)}
          onChange={this.onChange.bind(this)} />
      )
    } else {
      return <label onClick={this.clickHandler.bind(this)}>{title}</label>
    }
  }
}
