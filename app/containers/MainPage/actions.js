/*
 *
 * MainPage actions
 *
 */

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

export function loadStore() {
  return {
    type: LOAD_STORE,
  };
}

export function loadStoreSuccess(todos) {
  return {
    type: LOAD_STORE_SUCCESS,
    todos,
  };
}
export function loadStoreError(error) {
  return {
    type: LOAD_STORE_ERROR,
    error,
  };
}
export function addToStore(todo) {
  return {
    type: ADD_TO_STORE,
    todo,
  };
}
export function addToStoreSuccess(message) {
  return {
    type: ADD_TO_STORE_SUCCESS,
    message,
  };
}
export function addToStoreError(error) {
  return {
    type: ADD_TO_STORE_ERROR,
    error,
  };
}

export function updateStore(todoid, message) {
  return {
    type: UPDATE_STORE,
    todoid,
    message,
  };
}
export function updateStoreSuccess(message) {
  return {
    type: UPDATE_STORE_SUCCESS,
    message,
  };
}
export function updateStoreError(error) {
  return { type: UPDATE_STORE_ERROR, error };
}

export function deleteFromStore(todoid) {
  return {
    type: DELETE_FROM_STORE,
    todoid,
  };
}
export function deleteFromStoreSuccess(message) {
  return {
    type: DELETE_FROM_STORE_SUCCESS,
    message,
  };
}
export function deleteFromStoreError(error) {
  return {
    type: DELETE_FROM_STORE_ERROR,
    error,
  };
}
