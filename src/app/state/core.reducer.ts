import { Task } from '../task';
import { Actions, ActionTypes } from './core.action';
import { Action } from '@ngrx/store';

export interface State {
  tasks: Array<Task>;
  login: boolean;
}

export const initialState: State = {
  tasks: [],
  login: false,
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.Add:
      console.log('Add 実行されました。');
      state.tasks.push(action.payload.task);
      return Object.assign({}, { ...state, tasks : state.tasks });

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
