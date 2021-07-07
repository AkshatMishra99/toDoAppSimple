/**
 *
 * UpdateForm
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import EditIcon from '@material-ui/icons/Edit';
import messages from './messages';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '13px',
    padding: '20px',
  },
  button: {
    marginLeft: '10px',
  },
});
function UpdateForm({ id, updateTodoHandler }) {
  const [message, setMessage] = useState('');
  const classes = useStyles();
  const onChangeHandler = e => {
    const val = e.target.value;
    setMessage(val);
  };
  const onClickHandler = () => {
    console.log(message);
    if (messages && message !== '') {
      updateTodoHandler(id, message);
      setMessage('');
    }
  };
  return (
    <div className={classes.root}>
      <TextField
        id="outlined"
        value={message}
        onChange={onChangeHandler}
        label="Message"
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<EditIcon>edit</EditIcon>}
        onClick={onClickHandler}
      >
        Edit
      </Button>
    </div>
  );
}

UpdateForm.propTypes = {
  id: PropTypes.string.isRequired,
  updateTodoHandler: PropTypes.func.isRequired,
};

export default UpdateForm;
