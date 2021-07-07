/*
 *
 * MainPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_STORE,
  LOAD_STORE_SUCCESS,
  LOAD_STORE_ERROR,
  ADD_TO_STORE,
  ADD_TO_STORE_SUCCESS,
  ADD_TO_STORE_ERROR,
  UPDATE_STORE,
  DELETE_FROM_STORE,
  DELETE_FROM_STORE_SUCCESS,
  DELETE_FROM_STORE_ERROR,
} from './constants';

export const initialState = {
  toDoList: [],
  loading: false,
  error: true,
  addLoading: false,
  addError: true,
  updateLoading: false,
  updateError: true,
  deleteLoading: true,
  deleteError: false,
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    console.log('the action is ', action);
    switch (action.type) {
      case LOAD_STORE:
        // console.log('loading store ', action);
        // return state.set('loading', true).set('error', false);
        return { ...state, loading: true, error: false };
      case LOAD_STORE_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          toDoList: action.todos,
        };
      case LOAD_STORE_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      case ADD_TO_STORE:
        return {
          ...state,
          addLoading: true,
          toDoList: [...state.toDoList, action.todo],
        };
      case ADD_TO_STORE_SUCCESS:
        return { ...state, addLoading: false, error: false };
      case ADD_TO_STORE_ERROR:
        return { ...state, addLoading: false, error: action.error };
      case UPDATE_STORE:
        return {
          ...state,
          toDoList: state.toDoList.reduce((acc, todo) => {
            if (todo.id === action.todoid) {
              todo.message = action.message;
            }
            acc.push(todo);
            return acc;
          }, []),
        };
      // case UPDATE_STORE_SUCCESS:
      //   return state.set('updateLoading', false).set('updateError', false);
      // case UPDATE_STORE_ERROR:
      //   return state.set('updateLoading', false).set('updateError', action.err);
      case DELETE_FROM_STORE:
        return {
          ...state,
          toDoList: state.toDoList.filter(todo => todo.id !== action.todoid),
          deleteLoading: true,
        };
      case DELETE_FROM_STORE_SUCCESS:
        return {
          ...state,
          deleteLoading: false,
          error: false,
        };
      case DELETE_FROM_STORE_ERROR:
        return {
          ...state,
          deleteLoading: false,
          error: action.error,
        };
      default:
        return state;
    }
  });

export default mainPageReducer;
