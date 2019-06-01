import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromCore from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo';
  login: boolean;
  login$: Observable<boolean>;
  constructor(private store: Store<fromCore.State>) {
    this.login$ = this.store.select(fromCore.getLogin);
  }
  ngOnInit() {}
}
