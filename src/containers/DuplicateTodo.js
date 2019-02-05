import React, {Component} from 'react'
import {connect} from 'react-redux'

class DuplicateTodo extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.dispatch({type: 'DUPLICATE_TODO', text: this.props.text})
  }

  render() {
    return (
        <div>
          <button onClick={this.handleClick}>
            Duplicate Todo
          </button>
        </div>
    )
  }
}

export default connect()(DuplicateTodo)