import React, { Component } from "react";
import { render } from "react-dom";
import "./styles/index.scss";

import "../components/styles/Hello.scss";
import Hello from "../components/Hello.jsx";

const img = require("./avatar.png");
class App extends Component {
  render() {
    return (
      <div className="container">
        <Hello title="OscarRaygoza" />
        <h1 className="h1">Hellow React App</h1>
        <img src={img} className="img" alt="Image png" />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
