import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Add, Delete, Update } from '../actions/task.action';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Task[];

  task$: Observable<Task>;

  selectedTask: Task;

  constructor(private taskService: TaskService, private store: Store<{ task: Task }>) {
    this.task$ = store.pipe(select('task'));
  }

  ngOnInit() {
    this.getTasks();
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  add() {
    this.store.dispatch(new Add());
  }

  delete() {
    this.store.dispatch(new Delete());
  }

  update() {
    this.store.dispatch(new Update());
  }

  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

}
