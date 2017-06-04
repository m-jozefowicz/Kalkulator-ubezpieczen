import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./Components/Calculator.jsx";
require("../scss/main.scss");

class App extends React.Component {
  render() {
    return <Calculator />
  }
}

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render (
    <App />,
    document.getElementById("app")
  )
});
