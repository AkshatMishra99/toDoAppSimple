import { all, takeLatest, put } from 'redux-saga/effects';
import {
  loadStoreError,
  loadStoreSuccess,
  addToStoreSuccess,
  addToStoreError,
} from './actions';
import { LOAD_STORE, ADD_TO_STORE } from './constants';
import todos from './mocks/Todos';

// API to fetch todos from the server or mock
function* fetchTodos(action) {
  // console.log(action);
  try {
    yield put(loadStoreSuccess(todos));
  } catch (err) {
    yield put(loadStoreError(err));
  }
}
export function* loadStore() {
  // yield put(loadStoreSuccess(todos));
  yield takeLatest(LOAD_STORE, fetchTodos);
}
function* addTodos(action) {
  try {
    yield put(addToStoreSuccess('Todo Added Successfully'));
  } catch (err) {
    yield put(addToStoreError(err));
  }
}

export function* addToStore() {
  yield takeLatest(ADD_TO_STORE, addTodos);
}

// Individual exports for testing
export default function* mainPageSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadStore()]);
}
