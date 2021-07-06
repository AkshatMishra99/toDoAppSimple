/**
 *
 * Todos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Todo from '../Todo';
const StyledWrapper = styled(({ className, ...props }) => (
  <div className={className}>{props.content}</div>
))`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 20px;
`;

function Todos({ todos, deleteTodoHandler }) {
  const todosContent = todos.map(todo => (
    <Todo todo={todo} deleteTodoHandler={deleteTodoHandler} />
  ));
  console.log('the todos are here', todos);
  return (
    <StyledWrapper
      content={todosContent}
      deleteTodoHandler={deleteTodoHandler}
    />
  );
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodoHandler: PropTypes.func.isRequired,
};

export default Todos;
