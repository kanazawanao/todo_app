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
      const deleteResult = Array<Task>();
      for (let t of state.tasks) {
        if (t.id === action.payload.task.id) {
          continue;
        }
        deleteResult.push(t);
      }
      return Object.assign({}, { ...state, tasks: deleteResult });

    case ActionTypes.Update:
      const updateResult = Array<Task>();
      for (let t of state.tasks) {
        if (t.id === action.payload.task.id) {
          updateResult.push(action.payload.task);
          continue;
        }
        updateResult.push(t);
      }
      return Object.assign({}, { ...state, tasks: updateResult });

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
