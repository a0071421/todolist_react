import styled from "styled-components";
import { useMemo } from "react";
import Todo from "./Todo";

const TodoListWrapper = styled.div`
  padding: 1rem;
`;

const Todos = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0px;
`;

const ListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem 1rem 0.5rem;
  font-size: 14px;
`;

const BtnClear = styled.a`
  color: #9f9a91;
  cursor: pointer;
`;

const List = ({ todos, deleteTodo, toggleUndo, clearCompleteTodo }) => {
  const getUndo = useMemo(() => {
    return todos.filter((todo) => todo.undo).length;
  }, [todos]);
  return (
    <TodoListWrapper>
      <Todos>
        {todos.map((todo) => (
          <Todo
            deleteTodo={deleteTodo}
            toggleUndo={toggleUndo}
            key={todo.id}
            todo={todo}
          ></Todo>
        ))}
      </Todos>
      <ListFooter>
        {getUndo} 個待完成項目
        <BtnClear onClick={clearCompleteTodo}>清除已完成項目</BtnClear>
      </ListFooter>
    </TodoListWrapper>
  );
};

export default List;
