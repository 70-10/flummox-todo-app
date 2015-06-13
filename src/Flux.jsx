"use strict";

import Flummox from "flummox";

import Actions from "./actions/TodoActions";
import TodoStore from "./stores/TodoStore";
import TodoConstants from "./constants/TodoConstants";

export default class Flux extends Flummox {
  constructor() {
    super();

    this.createActions(TodoConstants.TODO, Actions);
    this.createStore(TodoConstants.TODO, TodoStore, this);
  }
}
