import React from "react";
import ReactDOM from "react-dom";
import "@/index.css";
import { ResetStyle, GlobalStyle } from "@/global/globalStyle.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  ButtonGroup,
  PrimaryButton,
  WarningButton,
} from "@/todolist/style/styled-components";
import App from "todo/TodoListApp";
import reportWebVitals from "@/reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <Router>
      <ButtonGroup>
        <PrimaryButton to="/">即時天氣預報</PrimaryButton>
        <WarningButton to="/about">Todo List</WarningButton>
      </ButtonGroup>
      <Route path="/" exact component={App}></Route>
      {/* <Route path="/about" component={About}></Route> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
