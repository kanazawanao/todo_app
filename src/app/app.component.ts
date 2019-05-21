import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as TaskReducer from './reducers/task.reducer';
import { getLogin } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo';
  login: boolean;
  login$: Observable<boolean>;
  constructor(private store: Store<TaskReducer.State>){
    this.login$ = this.store.select(getLogin);
  }
  ngOnInit(){
    
  }
}
