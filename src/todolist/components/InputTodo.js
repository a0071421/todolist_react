import styled from "styled-components";
import { ReactComponent as Add } from "todolist/images/add.svg";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";

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
  &:disabled {
    cursor: not-allowed;
  }
  svg {
    width: 20px;
    height: auto;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

const InputTodo = ({ addTodo }) => {
  // input todo
  const inputRef = useRef(null);
  // input是否合法
  const [disable, setDisable] = useState(true);

  // 按下enter時，將todo加入至陣列
  const enterAddTodo = (e) => {
    // input 為空
    if (handleChangeIsEmpty()) return;
    if (e.keyCode === 13) {
      addTodo({
        id: uuidv4(),
        title: inputRef.current.value,
        undo: true,
      });
      inputRef.current.value = "";
      setDisable(true);
    }
  };
  // 判斷input是否為空
  const handleChangeIsEmpty = () => {
    const value = inputRef.current.value;
    if (!value) {
      setDisable(true);
      return true;
    } else {
      setDisable(false);
      return false;
    }
  };

  // 將新todo傳入addTodo
  const handleAddTodo = () => {
    addTodo({
      id: uuidv4(),
      title: inputRef.current.value,
      undo: true,
    });
    inputRef.current.value = "";
    setDisable(true);
  };
  return (
    <TodoInput>
      <input
        ref={inputRef}
        type="text"
        placeholder="請輸入代辦事項"
        onChange={handleChangeIsEmpty}
        onKeyUp={enterAddTodo}
      />
      <AddBtn onClick={handleAddTodo} disabled={disable}>
        <Add />
      </AddBtn>
    </TodoInput>
  );
};

export default InputTodo;
