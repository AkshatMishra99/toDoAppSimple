/**
 *
 * Todo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';
import { Button, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
  root: {},
  id: {
    margin: '2px',
  },
  mesage: {
    fontWeight: 'bold',
  },
  button: {
    margin: '5px',
  },
});

const Todo = styled(({ className, ...props }) => {
  const classes = useStyles();
  const { todo, deleteTodoHandler } = props;
  console.log(todo);
  const onClickHandler = () => {
    deleteTodoHandler(todo.id);
  };
  return (
    <Paper className={className} key={className}>
      <div className={classes.mesage} key={classes.message}>
        {todo.message}
      </div>
      <Button
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={onClickHandler}
      >
        Delete
      </Button>
    </Paper>
  );
})`
  display: flex;
  flexdirection: row;
  margin: auto;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 5px auto;
`;

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodoHandler: PropTypes.func.isRequired,
};

export default Todo;
