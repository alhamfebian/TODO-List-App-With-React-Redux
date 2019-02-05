import React, {Component}  from 'react';
import {connect} from 'react-redux'

class RemoveTodo extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.dispatch({type: 'DELETE_TODO', id: this.props.id})
  }

  render() {
    return (
        <div>
          <button onClick={this.handleClick}>
            Remove Todo
          </button>
        </div>
    )
  }
}

export default connect()(RemoveTodo);