import React, { Component } from 'react'

export default class Filter extends Component {
  filter( event ) {
    event.preventDefault()

    this.props.changeFilter( this.props.selection )
  }

  render() {
    const { selection, currentFilter } = this.props
    const className = selection === currentFilter ? 'selected' : ''

    return (
      <a href="#" onClick={this.filter.bind(this)} className={className}>
        {this.props.children}
      </a>
    )
  }
}
