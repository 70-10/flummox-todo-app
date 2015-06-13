"use strict";

import React from "react";
import {Input, ButtonInput, Row, Col} from "react-bootstrap";
import TodoConstants from "../constants/TodoConstants";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: props.newTodo
    };
  }

  handleChange(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.newTodo.length === 0) {
      return;
    }

    console.log(this.props.flux.getActions(TodoConstants.TODO));
    this.props.flux.getActions(TodoConstants.TODO).create(this.state.newTodo);

    this.setState( {
      newTodo: ""
    });
  }

  render() {
    return (
      <form>
        <Row>
          <Col xs={10}>
            <Input type="text" value={this.state.newTodo} onChange={this.handleChange.bind(this)} placeholder="New Todo" autofocus bsSize="large" />
          </Col>
          <Col xs={2}>
            <ButtonInput type="submit" value="Add Todo" onClick={this.handleSubmit.bind(this)} />
          </Col>
        </Row>
      </form>
    );
  }
}

TodoForm.defaultProps = {newTodo: ""};
