import styled from "styled-components";
import { ReactComponent as Add } from "./images/add.svg";
import { useState, useEffect, useRef } from "react";
import List from "./components/List";
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

const TodoInput = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 0.25rem 0rem 0.25rem 1rem;
  input {
    display: inline-block;
    width: 100%;
    border: 0;
    outline: 0;
    font-size: 1rem;
    color: #333;
  }
`;

const AddBtn = styled.button`
  margin-right: 3px;
  display: inline-block;
  padding: 0.25rem;
  line-height: 1;
  border-radius: 10px;
  text-align: center;
  vertical-align: middle;
  background: #333;
  color: #fff;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  svg {
    width: 20px;
    height: auto;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

const TodoListContainer = styled.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 15px 0 rgb(0 0 0 / 15%);
`;

const Tab = styled.ul`
  display: flex;
  text-align: center;
  color: #9f9a91;
  font-size: 14px;
  list-style: none;
  text-align: center;
  padding-left: 0px;
  margin-bottom: 0px;
`;

const TabContent = styled.li`
  padding: 1rem;
  flex-grow: 1;
  border-bottom: 2px solid #efefef;
  cursor: pointer;
`;

function TodoListApp() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [
      {
        id: 1,
        title: "gggg",
        undo: true,
      },
      {
        id: 2,
        title: "apple",
        undo: true,
      },
    ]
  );
  const [disable, setDisable] = useState(true);
  const inputRef = useRef(null);
  const addtodo = () => {
    const value = inputRef.current.value;
    setTodos([{ id: 4, title: value, undo: true }, ...todos]);
    setDisable(true);
    inputRef.current.value = "";
  };
  const handleChange = () => {
    const value = inputRef.current.value;
    if (!value) setDisable(true);
    else setDisable(false);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleUndo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, undo: !todo.undo } : todo;
      })
    );
  };

  const clearCompleteTodo = () => {
    setTodos(todos.filter((todo) => todo.undo))
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Title>TODO LIST</Title>
      <Container>
        <TodoInput>
          <input
            ref={inputRef}
            type="text"
            placeholder="請輸入代辦事項"
            onChange={handleChange}
          />
          <AddBtn onClick={addtodo} disabled={disable}>
            <Add />
          </AddBtn>
        </TodoInput>
        <TodoListContainer>
          <Tab>
            <TabContent>全部</TabContent>
            <TabContent>待完成</TabContent>
            <TabContent>已完成</TabContent>
          </Tab>
          <List
            todos={todos}
            deleteTodo={deleteTodo}
            toggleUndo={toggleUndo}
            clearCompleteTodo={clearCompleteTodo}
          ></List>
        </TodoListContainer>
      </Container>
    </>
  );
}

export default TodoListApp;
