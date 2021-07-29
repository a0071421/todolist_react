import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import InputTodo from "./components/InputTodo";
import List from "./components/List";
import Tabs from "./components/Tabs";
import About from "./components/About";

const defaultButton = () => css`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const PrimaryButton = styled.a`
  ${defaultButton};
  color: #6c757d;
  border-color: #6c757d;
  &:hover {
    background-color: #5c636a;
    color: #fff;
    border-color: #5c636a;
  }
`;

const WarningButton = styled.a.attrs({ href: "/about" })`
  ${defaultButton};
  color: ${(props) => (props.active ? "#fff" : "#ffc107")};
  background-color: ${(props) => (props.active ? "#ffc720" : "")};
  border-color: #ffc107;
  &:hover {
    color: #fff;
    background-color: #ffc720;
    border-color: #ffc720;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  & > a {
    width: 30%;
  }
`;

const Title = styled.h1`
  font-family: "Baloo Tamma 2";
  font-weight: bold;
  font-size: 48px;
  color: #333333;
  letter-spacing: 8.75px;
  text-align: center;
`;
const Container = styled.div`
  margin: 0 auto 1.5rem auto;
  padding: 0 1rem;
  max-width: 500px;
`;

const TodoListContainer = styled.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 15px 0 rgb(0 0 0 / 15%);
`;

function TodoListApp() {
  // todos陣列
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  // 選擇的tab
  const [activeTab, setActiveTab] = useState("all");

  // 改變activeTabl
  const changeActiveTab = (activeTab) => {
    setActiveTab(activeTab);
  };
  // add todo
  const addTodo = (todo) => {
    if (todos.filter((item) => item.title === todo.title).length) {
      alert("新增事項重複囉");
      return;
    }
    const newTodos = [{ ...todo }, ...todos];
    setTodos(newTodos);
  };

  // 刪除指定todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // 設定指定todo的undo狀況
  const toggleUndo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, undo: !todo.undo } : todo
    );
    setTodos(newTodos);
  };

  // 清除所有undo === false(做完)的todo
  const clearCompleteTodo = (e) => {
    e.preventDefault();
    setTodos(todos.filter((todo) => todo.undo));
  };

  // 根據activeTab顯示對應之todos
  const filterTodos = useMemo(() => {
    if (activeTab === "all") {
      return todos;
    } else if (activeTab === "undo") {
      return todos.filter((todo) => todo.undo);
    } else {
      return todos.filter((todo) => !todo.undo);
    }
  }, [activeTab, todos]);

  // 輸出目前有多少尚未完成todos
  const getUndo = useMemo(() => {
    return todos.filter((todo) => todo.undo).length;
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <Router>
      <ButtonGroup>
        <PrimaryButton>即時天氣預報</PrimaryButton>
        <Route path="/about" component={About} />
        <WarningButton>Todo List</WarningButton>
      </ButtonGroup>
      {console.log("render")}
      <Title>TODO LIST</Title>
      <Container>
        <InputTodo addTodo={addTodo}></InputTodo>
        {todos.length > 0 && (
          <TodoListContainer>
            <Tabs changeActiveTab={changeActiveTab}></Tabs>
            <List
              todos={filterTodos}
              deleteTodo={deleteTodo}
              toggleUndo={toggleUndo}
              clearCompleteTodo={clearCompleteTodo}
              getUndo={getUndo}
            ></List>
          </TodoListContainer>
        )}
      </Container>
    </Router>
  );
}

export default TodoListApp;
