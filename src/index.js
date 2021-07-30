import React from "react";
import ReactDOM from "react-dom";
import "@/index.css";
import { ResetStyle, GlobalStyle } from "@/global/globalStyle.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  ButtonGroup,
  PrimaryButton,
  InfoButton,
} from "@/global/styled-components";
import TodoListApp from "todolist/TodoListApp";
import WeatherApp from "weather/WeatherApp";
import reportWebVitals from "@/reportWebVitals";
import * as serviceWorkerRegistration from "@/serviceWorkerRegistration";
ReactDOM.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <Router>
      <ButtonGroup>
        <PrimaryButton to="/">即時天氣預報</PrimaryButton>
        <InfoButton to="/todolist">Todo List</InfoButton>
      </ButtonGroup>
      <Route path="/" exact component={WeatherApp}></Route>
      <Route path="/todolist" component={TodoListApp}></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// 將 unregister 改成 register
serviceWorkerRegistration.register();
