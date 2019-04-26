import { ActionReducerMap, MetaReducer, Action } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ActionTypes } from '../actions/task.action';
import { Task } from '../task';

export interface State {
  loading: boolean;
  tasks: Task[];
}

export const initialState: State = {
  loading: false,
  tasks: []
};

export function taskReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Add:
      // add process
      return { ...state, loading: true };

    case ActionTypes.Delete:
    // delete process

    case ActionTypes.Update:
      // update process
      return { ...state, loading: true };

    default:
      return state;
  }
}
