import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditTodo extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const data = {
      newTitle
    }
    this.props.dispatch({ type: 'UPDATE_TODO', id: this.props.id, data: data })
  }
  render() {
    return (
        <div>
          <form onSubmit={this.handleEdit}>
            <input required type="text" ref={(input) => this.getTitle = input}
                   defaultValue={this.props.text} placeholder="Enter Post Title" /><br /><br />
            <button>Update</button>
          </form>
        </div>
    );
  }
}
export default connect()(EditTodo);