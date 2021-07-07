/**
 *
 * Todo
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';
import { Button, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import UpdateForm from '../UpdateForm';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  id: {
    margin: '2px',
  },
  message: {
    fontWeight: 'bold',
    padding: '15px',
  },
  button: {
    margin: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Todo = styled(({ className, ...props }) => {
  const classes = useStyles();
  const { todo, deleteTodoHandler, updateTodoHandler } = props;
  const [show, setShow] = useState(false);
  console.log(todo);
  const onDeleteClickHandler = () => {
    deleteTodoHandler(todo.id);
  };
  const onEditClickHandler = () => {
    setShow(true);
  };
  const onCancelClickHandler = () => {
    setShow(false);
  };
  return (
    <Paper className={className} key={className}>
      <div className={classes.container}>
        <div className={classes.message} key={classes.message}>
          {todo.message}
        </div>
        <Button
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={onDeleteClickHandler}
          variant="outlined"
        >
          Delete
        </Button>
        {!show && (
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<EditIcon>edit</EditIcon>}
            onClick={onEditClickHandler}
          >
            Edit
          </Button>
        )}
        {show && (
          <Button
            variant="outlined"
            className={classes.button}
            endIcon={<CancelIcon>cancel</CancelIcon>}
            onClick={onCancelClickHandler}
          >
            Cancel
          </Button>
        )}
      </div>
      <div className={classes.container}>
        {show && (
          <UpdateForm id={todo.id} updateTodoHandler={updateTodoHandler} />
        )}
      </div>
    </Paper>
  );
})`
  width: 65%;
  padding: 10px;
  margin: 5px auto;
`;

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodoHandler: PropTypes.func.isRequired,
};

export default Todo;
