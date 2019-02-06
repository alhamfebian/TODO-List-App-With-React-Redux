import React, {Component}  from 'react';
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap';

class RemoveTodo extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.dispatch({type: 'DELETE_TODO', id: this.props.id})
    console.log(this.props.dispatch({type: 'DELETE_TODO', id: this.props.id}))
  }

  render() {
    return (
        <div>
          <Button style={{marginRight: '10px'}} className="btn btn-danger" size="sm" onClick={this.handleClick}>
            Remove Todo
          </Button>
        </div>
    )
  }
}

export default connect()(RemoveTodo);