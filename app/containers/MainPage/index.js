/**
 *
 * MainPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { addToStore, deleteFromStore, loadStore, updateStore } from './actions';
import { makeToDoListSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Todos from '../../components/Todos';
import Header from '../../components/Header';
import InputTodo from '../../components/InputTodo';
function MainPage(props) {
  const {
    toDoList,
    loadStore: loadStoreProp,
    addTodo,
    deleteTodo,
    updateTodo,
  } = props;
  // console.log(toDoList, `here are the props ${toDoList}`);
  useInjectReducer({ key: 'mainPage', reducer });
  useInjectSaga({ key: 'mainPage', saga });
  useEffect(() => {
    loadStoreProp();
    // console.log(loadStore);
  }, []);
  const updateTodoHandler = (id, message) => {
    console.log(id, message);
    updateTodo(id, message);
  };
  const addToDoHandler = text => {
    const id = toDoList.reduce((acc, todo) => Math.max(acc, todo.id), 0) + 1;
    const todo = { id, message: text };
    // console.log(`in main page ${todo}`);
    addTodo(todo);
  };
  const deleteTodoHandler = todoid => {
    deleteTodo(todoid);
  };
  // console.log(`the Todos are ${toDoList}`, props);
  // console.log(makeToDoListSelector);
  return (
    <div>
      <Helmet>
        <title>MainPage</title>
        <meta name="description" content="Description of MainPage" />
      </Helmet>
      <Header>
        <FormattedMessage {...messages.header} />
      </Header>
      <InputTodo addToDoHandler={addToDoHandler} />
      <Todos
        todos={toDoList}
        deleteTodoHandler={deleteTodoHandler}
        updateTodoHandler={updateTodoHandler}
      />
    </div>
  );
}

MainPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  toDoList: PropTypes.array,
  loadStore: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // mainPage: makeSelectMainPage(),
  toDoList: makeToDoListSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadStore: () => dispatch(loadStore()),
    addTodo: todo => dispatch(addToStore(todo)),
    deleteTodo: todoid => dispatch(deleteFromStore(todoid)),
    updateTodo: (todoid, message) => dispatch(updateStore(todoid, message)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainPage);
