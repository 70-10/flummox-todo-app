"use strict";
import {Actions} from "flummox";

export default class TodoActions extends Actions {
  
  create(text) {
    return text;
  }

  delete(id) {
    return id;
  }

  toggleDone(id) {
    return id;
  }
}
