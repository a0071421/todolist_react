import styled from "styled-components";
import { ReactComponent as Delete } from "../images/cancel.svg";

const Item = styled.li`
  margin-bottom: 0.5rem;
  position: relative;
  padding-right: 2rem;
`;

const CheckBoxLabel = styled.label`
  position: relative;
  user-select: none;
  width: 100%;
  display: block;
  padding-left: 44px;
  cursor: pointer;
`;

const CheckBoxContent = styled.span`
  display: block;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  line-height: 1.5;
  color: ${(props) => (props.undo ? "" : "#9f9a91")};
  text-decoration: ${(props) => (props.undo ? "" : "line-through")};
  &::before {
    content: "";
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%) scale(1);
    height: 20px;
    width: 20px;
    border-radius: 5px;
    border: 1px solid #333;
    border-color: ${(props) => (props.undo ? "#333" : "transparent")};
    transform: ${(props) => (props.undo ? "" : "translateY(-50%) scale(0)")};
    pointer-events: none;
    transition: 0.3s ease;
  }
  &::after {
    content: "";
    position: absolute;
    left: 14px;
    top: 27%;
    transform: rotate(45deg);
    height: 15px;
    width: 0.5rem;
    border-radius: 1px;
    border-bottom: 3px solid #ffd370;
    border-right: 3px solid #ffd370;
    pointer-events: none;
    opacity: ${(props) => (props.undo ? 0 : 1)};
    transition: 0.3s ease;
  }
`;

const CheckBoxInput = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
  /* &:checked ~ ${CheckBoxContent}::before {
    border-color: transparent;
    transform: translateY(-50%) scale(0);
  }
  &:checked ~ ${CheckBoxContent}::after {
    opacity: 1;
  }

  &:checked ~ ${CheckBoxContent} {
    color: #9f9a91;
    text-decoration: line-through;
  } */
`;

const DeleteBtn = styled(Delete)`
  position: absolute;
  cursor: pointer;
  opacity: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  ${Item}:hover & {
    opacity: 1;
  }
`;

const Todo = ({ todo, deleteTodo, toggleUndo }) => {
  return (
    <>
      <Item>
        <CheckBoxLabel>
          <CheckBoxInput onClick={() => toggleUndo(todo.id)}></CheckBoxInput>
          <CheckBoxContent undo={todo.undo}>{todo.title}</CheckBoxContent>
        </CheckBoxLabel>
        <DeleteBtn onClick={() => deleteTodo(todo.id)} />
      </Item>
    </>
  );
};

export default Todo;
