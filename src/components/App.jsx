"use strict";

import React from "react";
import FluxComponent from "flummox/component";

import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
import TodoConstants from "../constants/TodoConstants";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>TODO</h1>
        <FluxComponent>
          <TodoForm />
        </FluxComponent>
        <FluxComponent connectToStores={[TodoConstants.TODO]}>
          <TodoList />
        </FluxComponent>
      </div>
    );
  }
}
