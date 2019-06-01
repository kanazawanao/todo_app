import { Action } from '@ngrx/store';
import { Task } from '../task';

export enum ActionTypes {
  Add = '[Task] Add',
  AddSuccess = '[Task] AddSuccess',
  AddFailure = '[Task] AddFailure',
  Delete = '[Task] Delete',
  DeleteSuccess = '[Task] DeleteSuccess',
  DeleteFailure = '[Task] DeleteFailure',
  Update = '[Task] Update',
  UpdateSuccess = '[Task] UpdateSuccess',
  UpdateFailure = '[Task] UpdateFailure',
  GetAll = '[Task] GetAll',
  GetAllSuccess = '[Task] GetAllSuccess',
  GetAllFailure = '[Task] GetAllFailure',
}

export class Add implements Action {
  readonly type = ActionTypes.Add;
  constructor(public payload: { task: Task }) { }
}

export class AddSuccess implements Action {
  readonly type = ActionTypes.AddSuccess;
}

export class AddFailure implements Action {
  readonly type = ActionTypes.AddFailure;
}

export class Delete implements Action {
  readonly type = ActionTypes.Delete;
  constructor(public payload: { task: Task }) { }
}

export class DeleteSuccess implements Action {
  readonly type = ActionTypes.DeleteSuccess;
}

export class DeleteFailure implements Action {
  readonly type = ActionTypes.DeleteFailure;
}

export class Update implements Action {
  readonly type = ActionTypes.Update;
  constructor(public payload: { task: Task }) { }
}

export class UpdateSuccess implements Action {
  readonly type = ActionTypes.UpdateSuccess;
}

export class UpdateFailure implements Action {
  readonly type = ActionTypes.UpdateFailure;
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

export type CoreActions =
  Add
  | AddSuccess
  | AddFailure
  | Delete
  | DeleteSuccess
  | DeleteFailure
  | Update
  | UpdateSuccess
  | UpdateFailure
  | GetAll
  | GetAllSuccess
  | GetAllFailure;
