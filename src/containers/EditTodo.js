import React, {Component} from 'react';
import { connect } from 'react-redux';
import {editTodo} from '../actions'


let EditTodo = ({text, dispatch}) => {
  return (
      <div>
        <input type='text' defaultValue={text} />
        <button> Update </button>
      </div>
  )
}

EditTodo = connect() (EditTodo)

export default EditTodo