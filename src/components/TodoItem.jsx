"use strict";

import React from "react";
import {ListGroupItem, Row, Col, Button} from "react-bootstrap";
import TodoConstants from "../constants/TodoConstants";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onComplete() {
    this.props.flux.getActions(TodoConstants.TODO).toggleDone(this.props.id);
  }

  onDelete() {
      this.props.flux.getActions(TodoConstants.TODO).delete(this.props.id);
  }

  render() {
    let style = {
      textDecoration: this.props.completed ? "line-through" : ""
    };
    return (
      <ListGroupItem>
        <Row className="todoItem">
          <Col xs={8} style={style}>{this.props.text}</Col>
          <Col xs={2}>
            <Button onClick={this.onComplete.bind(this)} bsStyle="primary">
              <i className="fa fa-check"> Done</i>
            </Button>
          </Col>
          <Col xs={2}>
            <Button onClick={this.onDelete.bind(this)} bsStyle="danger">
              <i className="fa fa-trash-o"> Delete</i>
            </Button>
          </Col>
        </Row>
      </ListGroupItem>
    );
  }
}
