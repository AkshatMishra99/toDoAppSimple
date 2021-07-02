/**
 *
 * InputTodo
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/styles';
import Button from '../Button';
import TextField from '../TextField';
import messages from './messages';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '50px auto 20px',
    border: '1px solid rgba(0,0,0,0.5)',
    width: '60%',
    padding: '25px 25px 35px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    justifyContent: 'center',
  },
  header: {
    margin: '10px auto 30px',
    fontWeight: '600',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
function InputTodo({ addToDoHandler }) {
  const classes = useStyles();
  const [text, setText] = useState('');
  const onChangeHandler = e => {
    const val = e.target.value;
    console.log(val);
    setText(val);
  };
  const onSubmitHandler = e => {
    e.preventDefault();
    if (text && text.length > 0) {
      addToDoHandler(text);
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <FormattedMessage {...messages.header} />
      </div>
      <div className={classes.form}>
        <TextField
          value={text}
          id="outlined-basic"
          label="Enter Message"
          variant="outlined"
          onChange={onChangeHandler}
          color="secondary"
        />
        <Button
          onClick={onSubmitHandler}
          variant="contained"
          color="secondary"
        />
      </div>
    </div>
  );
}

InputTodo.propTypes = {
  addToDoHandler: PropTypes.func,
};

export default InputTodo;
