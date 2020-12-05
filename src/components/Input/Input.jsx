import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledForm = styled.form`
  width: 60vw;
  height: 36px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const StyledInput = styled.input`
  flex: 0 0 70%;
`;

const StyledButton = styled.button`
  background: black;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  color: white;
  flex: 0 0 20%;
  height: 100%;
  cursor: pointer;
`;

const Input = ({ addTodo }) => {
  const [input, changeInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    changeInput("");
    addTodo(input);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        required
        value={input}
        placeholder="Add todo..."
        maxLength={50}
        onChange={(e) => changeInput(e.target.value)}
      />
      <StyledButton type="submit">+</StyledButton>
    </StyledForm>
  );
};

Input.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Input;
