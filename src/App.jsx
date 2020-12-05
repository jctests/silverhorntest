import React from "react";
import styled from "styled-components";
import Input from "components/Input";
import Filter from 'components/Filter';
import List from "components/List";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const App = () => {
  return (
    <Wrapper>
      <Input />
      <Filter/>
      <List />
    </Wrapper>
  );
};

export default App;
