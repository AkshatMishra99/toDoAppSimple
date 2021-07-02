import { all, takeLatest, put } from 'redux-saga/effects';
import { loadStoreError, loadStoreSuccess } from './actions';
import { LOAD_STORE } from './constants';
import todos from './mocks/Todos';

// API to fetch todos from the server or mock
function* fetchTodos(action) {
  console.log(action);
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

// Individual exports for testing
export default function* mainPageSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadStore()]);
}
