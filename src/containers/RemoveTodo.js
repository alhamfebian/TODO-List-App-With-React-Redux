import React from 'react'
import {connect} from 'react-redux'
import {deleteTodo} from '../actions'

let RemoveTodo = ({id, dispatch}) => {
  return (
      <div>
        <button onClick={e => {
          e.preventDefault()
          dispatch(deleteTodo(id))
          console.log(dispatch(deleteTodo(id)))
        }}> Remove TODO
        </button>
      </div>
  )
}

RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo