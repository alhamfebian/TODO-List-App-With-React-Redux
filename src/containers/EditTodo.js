import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import {Collapse} from 'react-bootstrap'


class EditTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    const newTodo = this.getTodo.value;
    const data = {
      newTodo
    }
    this.props.dispatch({ type: 'UPDATE_TODO', id: this.props.id, data: data })
  }
  render() {
    const {open} = this.state
    const isCompleted = this.props.completed
    return (
      <div>
        {isCompleted ? (<Button className="btn btn-primary" size="sm" disabled> Edit Todo</Button>):(<Button onClick={() => this.setState({ open: !open })}
                                                                aria-controls="example-collapse-text" aria-expanded={open}
                                                                size="sm">Edit Todo</Button>
        )}

        <Collapse in={this.state.open}>
          <div id="example-collapse.text">
            <form onSubmit={this.handleClick} style={{marginTop: '10px'}}>
              {isCompleted ? (<input required type="text" ref={(input) => this.getTodo = input} defaultValue={this.props.text}
                                     placeholder="Edit Todo List" disabled/>):(<input required type="text" ref={(input) => this.getTodo = input}
                                                                                      defaultValue={this.props.text} placeholder="Edit Todo List" />)}
              {isCompleted ? (<Button className="btn btn-info" disabled size="sm" style={{marginLeft:'10px'}}> Update </Button>):(<Button style={{marginLeft: '10px'}}
                                                                                                                                          className="btn btn-info"
                                                                           size="sm" type="submit">Update</Button>)}
            </form>
          </div>
        </Collapse>
      </div>
    );
  }
}
export default connect()(EditTodo);