"use strict";

import React from "react";
import {ListGroup} from "react-bootstrap";
import FluxComponent from "flummox/component";

import TodoItem from "./TodoItem.jsx";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let todos = this.props.todos;
    let items = [];

    for (var id in todos) {
      let todo = todos[id];
      items.push(
        <TodoItem key={id} id={id} text={todo.text} completed={todo.completed} />
      );
    }

    return (
      <ListGroup>
        <FluxComponent>
          {items}
        </FluxComponent>
      </ListGroup>
    );
  }
}
