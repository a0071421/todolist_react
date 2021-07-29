import styled from "styled-components";
import { ReactComponent as Add } from "./images/add.svg";
import { useState, useMemo, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
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
        id: uuidv4(),
        title: "gggg",
        undo: true,
      },
      {
        id: uuidv4(),
        title: "apple",
        undo: true,
      },
    ]
  );
  // const [filterTodos, setFilterTodos] = useState(todos);
  const [disable, setDisable] = useState(true);
  const [tabType, setTabType] = useState("all");
  const inputRef = useRef(null);
  const addtodo = () => {
    const value = inputRef.current.value;
    const newTodo = [{ id: uuidv4(), title: value, undo: true }, ...todos];
    setTodos(newTodo);
    // setFilterTodos(newTodo);
    setDisable(true);
    inputRef.current.value = "";
  };
  const handleChange = () => {
    const value = inputRef.current.value;
    if (!value) setDisable(true);
    else setDisable(false);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    // setFilterTodos(newTodos);
  };

  const toggleUndo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, undo: !todo.undo } : todo
    );
    setTodos(newTodos);
    // setFilterTodos(newTodos);
  };

  const clearCompleteTodo = () => {
    // setFilterTodos(todos.filter((todo) => todo.undo));
    setTodos(todos.filter((todo) => todo.undo));
  };

  const filterTodos = useMemo(() => {
    if (tabType === "all") {
      return todos;
    } else if (tabType === "undo") {
      return todos.filter((todo) => todo.undo);
    } else {
      return todos.filter((todo) => !todo.undo);
    }
  }, [tabType]);

  /*   useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); */
  return (
    <>
      {console.log("render")}
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
            <TabContent onClick={() => setTabType("all")}>全部</TabContent>
            <TabContent onClick={() => setTabType("undo")}>待完成</TabContent>
            <TabContent onClick={() => setTabType("completed")}>
              已完成
            </TabContent>
          </Tab>
          {console.log(filterTodos + "gg")}
          <List
            todos={filterTodos}
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
