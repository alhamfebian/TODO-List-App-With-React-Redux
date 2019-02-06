import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap';

class DuplicateTodo extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.dispatch({type: 'DUPLICATE_TODO', text: this.props.text})
  }

  render() {
    return (
        <div>
          <Button style={{marginRight: '10px'}} className="btn btn-warning" size="sm" onClick={this.handleClick}>
            Duplicate Todo
          </Button>
        </div>
    )
  }
}

export default connect()(DuplicateTodo)