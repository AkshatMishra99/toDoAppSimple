/**
 *
 * Todo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  id: {
    margin: '2px',
  },
  mesage: {
    fontWeight: 'bold',
  },
});

const Todo = styled(({ className, ...props }) => {
  const classes = useStyles();
  const { todo } = props;
  console.log(todo);
  return (
    <Paper className={className} key={className}>
      <div className={classes.mesage} key={classes.message}>
        {todo.get('message')}
      </div>
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
};

export default Todo;
