"use strict";

import {Store} from "flummox";
import TodoConstants from "../constants/TodoConstants";

export default class TodoStore extends Store {
  constructor(flux) {
    super();

    console.log("HOGEGEGE: " + TodoConstants.TODO);
    let todoIds = flux.getActionIds(TodoConstants.TODO);

    this.register(todoIds.create, this.handleCreate);
    this.register(todoIds.delete, this.handleDelete);
    this.register(todoIds.toggleDone, this.handleToggleDone);
    this.state = {
      todos: {}
    };
  }

  handleCreate(text) {
    let newTodoId = new Date() + "";
    let newTodo = {
      text: text,
      completed: false
    };

    let todos = {};

    for (var id in this.state.todos) {
      let todo = this.state.todos[id];
      todos[id] = {
        text: todo.text,
        completed: todo.completed
      };
    }
    todos[newTodoId] = newTodo;

    this.setState({todos});
  }

  handleDelete(id) {
    let todos = {};
    for (var tmpId in this.state.todos) {
      if (tmpId !== id) {
        let todo = this.state.todos[tmpId];
        todos[tmpId] = {
          text: todo.text,
          completed: todo.completed
        };
      }
    }

    this.setState({todos});
  }

  handleToggleDone(id) {
    if (this.state.todos[id] === null) {
      return;
    }

    let todos = {};
    for (var tmpId in this.state.todos) {
      var todo = this.state.todos[tmpId];
      todos[tmpId] = {
        text: todo.text,
        completed: todo.completed
      };
      if (id === tmpId) {
        todos[tmpId].completed = !todos[tmpId].completed;
      }
    }

    this.setState({ todos });
  }

}
