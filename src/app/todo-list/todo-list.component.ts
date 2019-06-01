import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as TaskActions from '../state/core.action';
import * as fromCore from '../state';
import { TaskService } from '../service/task.service';
import { Task } from '../task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: Task[];
  tasks$: Observable<Task[]>;
  login$: Observable<boolean>;
  selectedTask: Task;

  constructor(
    private taskService: TaskService,
    private store: Store<fromCore.State>
  ) { }

  ngOnInit() {
    this.getTasks();
    this.tasks$ = this.store.select(fromCore.getTasks);
    this.login$ = this.store.select(fromCore.getLogin);
    this.tasks$.subscribe(t => this.tasks = t);
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  update() { }

  getTasks(): void {
    console.log('getTasks実行されました');
    this.store.dispatch(new TaskActions.GetAll());
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    let task: Task = {
      done: false,
      name: name,
      id: Math.max(...this.tasks.map(task => task.id)) + 1,
    };
    this.store.dispatch(new TaskActions.Add({ task }));
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteTask(task).subscribe();
  }
}
