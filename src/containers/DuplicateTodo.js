import React from 'react'
import {connect} from 'react-redux'
import {duplicateTodo} from '../actions'

let DuplicateTodo = ({text, dispatch}) => {
  let textDuplicate = text
  return (
      <div>
        <button onClick={e => {
          e.preventDefault()
          dispatch(duplicateTodo(textDuplicate))
          console.log(dispatch(duplicateTodo(textDuplicate)))
        }}> Duplicate Todo
        </button>
      </div>
  )
}

DuplicateTodo = connect()(DuplicateTodo)

export default DuplicateTodo