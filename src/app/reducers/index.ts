import {
  ActionReducerMap,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ActionTypes } from '../actions/task.action';

export const initialState = 0;

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export function taskReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Add:
      return state + 1;

    case ActionTypes.Delete:
      return state - 1;

    case ActionTypes.Update:
      return 0;

    default:
      return state;
  }
}
