import { Task } from '../task';
import { CoreActions, ActionTypes } from './core.action';

export interface State {
  tasks: Array<Task>;
  login: boolean;
}

export const initialState: State = {
  tasks: [],
  login: false,
};

export function reducer(state = initialState, action: CoreActions): State {
  switch (action.type) {
    case ActionTypes.Add:
      state.tasks.push(action.payload.task);
      return Object.assign({}, { ...state, tasks: state.tasks });

    case ActionTypes.Delete:
      return state;

    case ActionTypes.Update:
      state.login = true;
      return state;

    case ActionTypes.GetAll:
      state.login = true;
      return state;

    case ActionTypes.GetAllSuccess:
      console.log(action.payload.tasks);
      return Object.assign({}, { ...state, tasks: action.payload.tasks });

    case ActionTypes.GetAllFailure:
      state.login = true;
      return state;

    default:
      return state;
  }
}

export const getTasks = (state: State) => state.tasks;
export const getLogin = (state: State) => state.login;
