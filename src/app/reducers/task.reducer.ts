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
      console.log('Add 実行されました。');
      return state;

    case ActionTypes.Delete:
      console.log('Delete 実行されました。');
      return state;

    case ActionTypes.Update:
      console.log('Update実行されました。');
      state.login = true;
      return state;

    case ActionTypes.GetAll:
      console.log('GetAll実行されました。');
      state.login = true;
      return state;

    default:
      console.log('何も実行されませんでした');
      return state;
  }
}

export const getTasks = (state: State) => state.tasks;
export const getLogin = (state: State) => state.login;
