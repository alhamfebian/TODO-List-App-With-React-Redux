import React from 'react'
import PropTypes from 'prop-types'
import RemoveTodo from '../containers/RemoveTodo'
import DuplicateTodo from '../containers/DuplicateTodo'
import EditTodo from '../containers/EditTodo'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {ButtonGroup} from 'react-bootstrap'

export default class Todo extends React.Component {
  render() {
    return (
        <div>
          <Container>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col>
                <li style={{
                  marginRight: '20px',
                  textDecoration: this.props.completed ? 'line-through' : 'none',
                  fontSize: '20px'}}
                  onClick={this.props.onClick}> {this.props.text}
                </li>
              </Col>
              <Col xs={6}>
                <ButtonGroup>
                  <RemoveTodo id={this.props.id}/>
                  <DuplicateTodo text={this.props.text} id={this.props.id}/>
                  <EditTodo id={this.props.id} text={this.props.text} completed={this.props.completed}/>
                </ButtonGroup>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}