"use strict";

import React from "react";
import FluxComponent from "flummox/component";

import Flux from "./Flux.jsx";
import App from "./components/App.jsx";

let flux = new Flux();

React.render(
  // <App flux={flux} />,
  <FluxComponent flux={flux}>
    <App />
  </FluxComponent>,
  document.body
);
