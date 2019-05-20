import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTodo from './task.reducer';

/**
 * 状態 および Reducer
 */
export { State, reducer } from './task.reducer';

/**
 * セレクタ
 */
export const getFeatureState = createFeatureSelector<fromTodo.State>('Todo');
export const getTasks = createSelector(getFeatureState, fromTodo.getTasks);
export const getLogin = createSelector(getFeatureState, fromTodo.getLogin);