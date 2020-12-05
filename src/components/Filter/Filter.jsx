import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
  margin: 12px 0;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 12px 24px;
`;

const BUTTONS = [
  { name: "All" },
  { name: "Completed", qs: true },
  { name: "Active", qs: false },
];

const Filter = ({ fetchTodos }) => (
  <Container>
    {BUTTONS.map(({ qs, name }) => (
      <StyledButton onClick={() => fetchTodos(qs)}>{name}</StyledButton>
    ))}
  </Container>
);

Filter.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
};

export default Filter;
