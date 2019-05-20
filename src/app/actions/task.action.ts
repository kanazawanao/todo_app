import { Action } from '@ngrx/store';
import { Task } from '../task';

export enum ActionTypes {
  Add = '[Task Component] Add',
  Delete = '[Task Component] Delete',
  Update = '[Task Component] Update',
  GetAll = '[Task Component] GetAll',
}

export class Add implements Action {
  readonly type = ActionTypes.Add;
  constructor(public payload: { task: Task } ) {}
}

export class Delete implements Action {
  readonly type = ActionTypes.Delete;
}

export class Update implements Action {
  readonly type = ActionTypes.Update;
}

export class GetAll implements Action {
  readonly type = ActionTypes.GetAll;
}
