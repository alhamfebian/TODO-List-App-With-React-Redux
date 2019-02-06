import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const AddTodo = ({ dispatch }) => {
  let input

  return (
      <div>
        <h1 style={{textAlign: 'center'}}> Welcome to Todo List App</h1>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          <Container>
            <Row>
              <Col></Col>
              <Col>
               <input className="form-control" type="text" ref={node => input = node} placeholder="What do you want todo?"/>
                <Row>
                  <Col></Col>
                  <Col>
                    <Button style={{marginTop: '10px', marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent:'center'}} variant="success" type="submit">
                      Add Todo
                    </Button>
                  </Col>
                  <Col></Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </form>
      </div>
  )
}

export default connect()(AddTodo)
