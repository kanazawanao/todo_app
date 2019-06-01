import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionTypes } from './core.action';
import { TaskService } from '../service/task.service';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';


@Injectable()
export class CoreEffects {

  @Effect()
  loadTasks$ = this.actions$
    .pipe(
      ofType(ActionTypes.GetAll),
      mergeMap(() => this.taskService.getTasks()
        .pipe(
          map(tasks => ({ type: ActionTypes.GetAllSuccess, payload: tasks })),
          catchError(() => of({ type: ActionTypes.GetAllFailure }))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) { }

}
