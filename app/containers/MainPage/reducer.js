/*
 *
 * MainPage reducer
 *
 */
import produce from 'immer';
import { fromJS } from 'immutable';
import {
  LOAD_STORE,
  LOAD_STORE_SUCCESS,
  LOAD_STORE_ERROR,
  ADD_TO_STORE,
  ADD_TO_STORE_SUCCESS,
  ADD_TO_STORE_ERROR,
  UPDATE_STORE,
  UPDATE_STORE_SUCCESS,
  UPDATE_STORE_ERROR,
  DELETE_FROM_STORE,
  DELETE_FROM_STORE_SUCCESS,
  DELETE_FROM_STORE_ERROR,
} from './constants';

export const initialState = fromJS({
  toDoList: [],
  loading: false,
  error: true,
  addLoading: false,
  addError: true,
  updateLoading: false,
  updateError: true,
  deleteLoading: true,
  deleteError: false,
});

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    // console.log('the action is ', action);
    switch (action.type) {
      case LOAD_STORE:
        // console.log('loading store ', action);
        return state.set('loading', true).set('error', false);
      case LOAD_STORE_SUCCESS:
        return state
          .set('loading', false)
          .set('error', false)
          .set('toDoList', action.todos);
      case LOAD_STORE_ERROR:
        return state.set('loading', false).set('error', action.error);
      case ADD_TO_STORE:
        return state
          .set('toDoList', state.toDoList.concat(action.todo))
          .set('addLoading', true)
          .set('addError', false);
      case ADD_TO_STORE_SUCCESS:
        return state.set('addLoading', false).set('addError', false);
      case ADD_TO_STORE_ERROR:
        return state.set('addLoading', false).set('addError'.action.error);
      case UPDATE_STORE:
        return state.set('addLoading', true).set(
          'toDoList',
          state.toDoList.map(todo => {
            if (todo.id === action.todoid) return action.newtodo;
            return todo;
          }),
        );
      case UPDATE_STORE_SUCCESS:
        return state.set('updateLoading', false).set('updateError', false);
      case UPDATE_STORE_ERROR:
        return state.set('updateLoading', false).set('updateError', action.err);
      case DELETE_FROM_STORE:
        return state
          .set('deleteLoading', true)
          .set(
            'toDoList',
            state.toDoList.filter(todo => todo.id !== action.todoid),
          );
      case DELETE_FROM_STORE_SUCCESS:
        return state.set('deleteLoading', false).set('deleteError', false);
      case DELETE_FROM_STORE_ERROR:
        return state
          .set('deleteLoading', false)
          .set('deleteError', action.error);
      default:
        return state;
    }
  });

export default mainPageReducer;
