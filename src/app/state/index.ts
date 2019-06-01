import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromCore from './core.reducer';

export interface State {
  core: fromCore.State;
}

export const reducers: ActionReducerMap<State> = {
  core: fromCore.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectCore = (state: State) => state.core;
export const getLogin = createSelector(selectCore, fromCore.getLogin);
export const getTasks = createSelector(selectCore, fromCore.getTasks);

