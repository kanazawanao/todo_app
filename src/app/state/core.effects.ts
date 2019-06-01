import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes, AddSuccess, AddFailure, GetAllFailure, GetAllSuccess, Add } from './core.action';
import { TaskService } from '../service/task.service';
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';


@Injectable()
export class CoreEffects {

  @Effect()
  getTasks$ = this.actions$.pipe(
    ofType(ActionTypes.GetAll),
    mergeMap(() => this.taskService.getTasks().pipe(
      map(result => new GetAllSuccess({ tasks: result })),
      catchError(error => of(new GetAllFailure()))
    ))
  );

  @Effect()
  addTask$ = this.actions$.pipe(
    ofType<Add>(ActionTypes.Add),
    map(action => action.payload),
    concatMap(payload => {
      const { task } = payload;
      return this.taskService.addTask(task).pipe(
        map(result => new AddSuccess()),
        catchError(error => of(new AddFailure()))
      )
    })
  );

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) { }

}
