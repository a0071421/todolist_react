import styled from "styled-components";

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
  border-bottom: ${(props) =>
    props.isActive ? "2px solid #333333;" : "2px solid #efefef"};
  cursor: pointer;
`;

let activeTab = "all";

const Tabs = ({ changeActiveTab }) => {
  // 更改active Tab
  const changeTab = (active) => {
    changeActiveTab(active);
    activeTab = active;
  };
  console.log(activeTab);
  return (
    <Tab>
      <TabContent
        onClick={() => changeTab("all")}
        isActive={activeTab === "all"}
      >
        全部
      </TabContent>
      <TabContent
        onClick={() => changeTab("undo")}
        isActive={activeTab === "undo"}
      >
        待完成
      </TabContent>
      <TabContent
        onClick={() => changeTab("completed")}
        isActive={activeTab === "completed"}
      >
        已完成
      </TabContent>
    </Tab>
  );
};

export default Tabs;
