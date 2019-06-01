import { Action } from '@ngrx/store';
import { Task } from '../task';

export enum ActionTypes {
  Add = '[Task] Add',
  Delete = '[Task] Delete',
  Update = '[Task] Update',
  GetAll = '[Task] GetAll',
  GetAllSuccess = '[Task] GetAllSuccess',
  GetAllFailure = '[Task] GetAllFailure',
}

export class Add implements Action {
  readonly type = ActionTypes.Add;
  constructor(public payload: { task: Task }) { }
}

export class Delete implements Action {
  readonly type = ActionTypes.Delete;
  constructor(public payload: { task: Task }) { }
}

export class Update implements Action {
  readonly type = ActionTypes.Update;
  constructor(public payload: { task: Task }) { }
}

export class GetAll implements Action {
  readonly type = ActionTypes.GetAll;
}

export class GetAllSuccess implements Action {
  readonly type = ActionTypes.GetAllSuccess;
  constructor(public payload: { tasks: Array<Task> }) { }
}

export class GetAllFailure implements Action {
  readonly type = ActionTypes.GetAllFailure;
}

export type Actions = Add | Delete | Update | GetAll | GetAllSuccess | GetAllFailure;
