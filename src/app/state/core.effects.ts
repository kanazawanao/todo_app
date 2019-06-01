import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes, GetAllSuccess, GetAllFailure } from './core.action';
import { TaskService } from '../service/task.service';
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';


@Injectable()
export class CoreEffects {

  @Effect()
  createTodo$ = this.actions$.pipe(
    ofType(ActionTypes.GetAll),
    mergeMap(() => this.taskService.getTasks().pipe(
      map(result => new GetAllSuccess({ tasks: result })),
      catchError(error => of(new GetAllFailure()))
    ))
  );

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) { }

}
