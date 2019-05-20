import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromTask from './reducers/task.reducer';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo';
  login: boolean;
  login$: Observable<boolean>;
  constructor(private store: Store<fromTask.State>){}
  ngOnInit(){
    this.login$ = this.store.pipe(select(fromTask.getLogin));
    console.log('aaa');
    console.log(this.login$._isScalar);
  }
}
