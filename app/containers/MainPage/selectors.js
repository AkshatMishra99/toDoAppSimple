import { createSelector } from 'reselect';
// import { toJS } from 'immutable';
import { initialState } from './reducer';
/**
 * Direct selector to the mainPage state domain
 */

const selectMainPageDomain = state => state.mainPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainPage
 */

const makeToDoListSelector = () =>
  createSelector(
    selectMainPageDomain,
    substate => substate.toDoList,
  );
export { makeToDoListSelector };
