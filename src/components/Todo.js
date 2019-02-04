import React from 'react'
import PropTypes from 'prop-types'
import RemoveTodo from '../containers/RemoveTodo'
import DuplicateTodo from '../containers/DuplicateTodo'
import EditTodo from '../containers/EditTodo'

export default class Todo extends React.Component {
  render() {
    return (
        <li
            onClick={this.props.onClick}
            className="list-group-item justify-content-between border-c1 c1"
        >
          <span style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
          >{this.props.text}</span>
          <span>
            <RemoveTodo id={this.props.id}/>
            <DuplicateTodo text={this.props.text}/>
            <EditTodo id={this.props.id}/>
          </span>
        </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}