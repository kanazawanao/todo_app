import { Action } from '@ngrx/store';

export enum ActionTypes {
  Add = '[Task Component] Add',
  Delete = '[Task Component] Delete',
  Update = '[Task Component] Update',
}

export class Add implements Action {
  readonly type = ActionTypes.Add;
}

export class Delete implements Action {
  readonly type = ActionTypes.Delete;
}

export class Update implements Action {
  readonly type = ActionTypes.Update;
}