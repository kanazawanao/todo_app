import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as CoreActions from './core.action';
import { TaskService } from '../service/task.service';
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';


@Injectable()
export class CoreEffects {

  @Effect()
  getTasks$ = this.actions$.pipe(
    ofType(CoreActions.ActionTypes.GetAll),
    mergeMap(() => this.taskService.getTasks().pipe(
      map(result => new CoreActions.GetAllSuccess({ tasks: result })),
      catchError(error => of(new CoreActions.GetAllFailure()))
    ))
  );

  @Effect()
  addTask$ = this.actions$.pipe(
    ofType<CoreActions.Add>(CoreActions.ActionTypes.Add),
    map(action => action.payload),
    concatMap(payload => {
      const { task } = payload;
      return this.taskService.addTask(task).pipe(
        map(result => new CoreActions.AddSuccess()),
        catchError(error => of(new CoreActions.AddFailure()))
      )
    })
  );

  @Effect()
  deleteTask$ = this.actions$.pipe(
    ofType<CoreActions.Delete>(CoreActions.ActionTypes.Delete),
    map(action => action.payload),
    concatMap(payload => {
      const { task } = payload;
      return this.taskService.deleteTask(task).pipe(
        map(result => new CoreActions.DeleteSuccess()),
        catchError(error => of(new CoreActions.DeleteFailure()))
      )
    })
  );

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) { }

}
