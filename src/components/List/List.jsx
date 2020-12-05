import React from "react";
import { useMount } from "react-use";
import styled from "styled-components";
import Todo from "./Todo";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 60vw;
`;

const List = ({ todos, fetchTodos }) => {
  useMount(() => {
    fetchTodos();
  });

  return (
    <Wrapper>
      {todos.map((todo, id) => (
        <Todo key={id} {...todo} />
      ))}
    </Wrapper>
  );
};

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.iRequired,
    })
  ),
};

export default List;
