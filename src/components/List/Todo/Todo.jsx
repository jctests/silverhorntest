import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin: 12px 0;
  box-shadow: 0 2px 4px grey;
`;

const StyledInput = styled.input`
  margin-right: 8px;
`;

const Description = styled.div`
  margin-right: 24px;
  flex: 0 1 70%;
  overflow: scroll;
`;

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  height: 24px;
  background: crimson;
  color: white;
`;

const Scratch = styled.div`
  position: absolute;
  top: 50;
  left: 1;
  width: 56vw;
  height: 2px;
  background: black;
`;

const Todo = ({ _id, title, completed, deleteTodo, toggleTodo }) => {
  const handleDelete = () => {
    deleteTodo(_id);
  };

  const handleToggle = () => {
    toggleTodo(_id);
  };

  return (
    <Wrapper>
      {completed && <Scratch />}
      <StyledInput
        type="checkbox"
        onChange={handleToggle}
        checked={completed}
      />
      <Description>{title}</Description>
      <StyledButton onClick={handleDelete}>Delete</StyledButton>
    </Wrapper>
  );
};

Todo.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default Todo;
