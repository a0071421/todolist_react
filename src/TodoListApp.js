import styled from "styled-components";
import { ReactComponent as Add } from "./images/add.svg";
import { ReactComponent as Delete } from "./images/cancel.svg";

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
  /* display: flex;
  align-items: center;
  justify-content: center; */
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
`;

const TodoListWrapper = styled.div`
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

const TodoList = styled.div`
  padding: 1rem;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0px;
`;

const Item = styled.li`
  padding: 0.5rem;
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

const CheckBoxInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
`;

const CheckBoxContent = styled.span`
  display: block;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  line-height: 1.5;
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
    pointer-events: none;
    transition: 0.3s ease;
  }
`;

const DeleteBtn = styled(Delete)`
  position: absolute;
  cursor: pointer;
  opacity: 1;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
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

function TodoListApp() {
  return (
    <>
      <Title>TODO LIST</Title>
      <Container>
        <TodoInput>
          <input type="text" placeholder="請輸入代辦事項" />
          <AddBtn>
            <Add />
          </AddBtn>
        </TodoInput>
        <TodoListWrapper>
          <Tab>
            <TabContent>全部</TabContent>
            <TabContent>待完成</TabContent>
            <TabContent>已完成</TabContent>
          </Tab>
          <TodoList>
            <List>
              <Item>
                <CheckBoxLabel>
                  <CheckBoxInput type="checkbox"></CheckBoxInput>
                  <CheckBoxContent>helo</CheckBoxContent>
                </CheckBoxLabel>
                <DeleteBtn />
              </Item>
              <Item>
                <CheckBoxLabel>
                  <CheckBoxInput type="checkbox"></CheckBoxInput>
                  <CheckBoxContent>helo</CheckBoxContent>
                </CheckBoxLabel>
              </Item>
            </List>
            <ListFooter>
              0 個待完成項目
              <BtnClear>清除已完成項目</BtnClear>
            </ListFooter>
          </TodoList>
        </TodoListWrapper>
      </Container>
    </>
  );
}

export default TodoListApp;
