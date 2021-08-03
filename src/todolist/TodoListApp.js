import styled, { css } from "styled-components";
import { useState, useMemo, useEffect } from "react";
import InputTodo from "todolist/components/InputTodo";
import List from "todolist/components/List";
import Tabs from "todolist/components/Tabs";

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
  max-width: 800px;
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
    <Container>
      {console.log("render")}
      <Title>TODO LIST</Title>
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
  );
}

export default TodoListApp;
