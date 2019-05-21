import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as TaskActions from '../actions/task.action';
import * as TaskReducer from '../reducers/task.reducer';
import { getLogin } from '../reducers';
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
    private store: Store<TaskReducer.State>,
  ) {
  }

  ngOnInit() {
    this.login$ = this.store.select(getLogin)
    this.getTasks();
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
    this.store.dispatch(new TaskActions.Update());
  }

  update() {
    this.store.dispatch(new TaskActions.Update());
  }

  getTasks(): void {
    console.log('getTasks実行されました');
    this.store.dispatch(new TaskActions.GetAll());
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.taskService.addTask({ name } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteTask(task).subscribe();
  }
}
