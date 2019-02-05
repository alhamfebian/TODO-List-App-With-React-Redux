import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';



class EditTodo extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const newTodo = this.getTodo.value;
    const data = {
      newTodo
    }
    this.props.dispatch({ type: 'UPDATE_TODO', id: this.props.id, data: data })
  }
  render() {
    return (
        <div>
          <form onSubmit={this.handleClick}>
            <input required type="text" ref={(input) => this.getTodo = input}
                   defaultValue={this.props.text} placeholder="Edit Todo List" /><br /><br />
            <Button variant="primary" size="xxl">Update</Button>
          </form>
        </div>
    );
  }
}
export default connect()(EditTodo);