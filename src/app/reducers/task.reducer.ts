import { Task } from '../task';
import { ActionTypes } from '../actions/task.action';
import { Action } from '@ngrx/store';

export interface State {
  tasks: Array<Task>,
  login: boolean,
}

export const initialState: State = {
  tasks: [],
  login: true,
};


export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ActionTypes.Add:
      return state;

    case ActionTypes.Delete:
      return state;

    case ActionTypes.Update:
      state.login = true;
      return state;

    case ActionTypes.GetAll:
      console.log('GetAll実行されました。');
      state.login = true;
      return state;

    default:
      return state;
  }
}

export const getTasks = (state: State) => state.tasks;
export const getLogin = (state: State) => state.login;
