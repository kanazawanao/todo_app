import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Add, Delete, Update, GetAll } from '../actions/task.action';
import { Task } from '../task';
import { TaskService } from '../service/task.service';
import * as fromTask from '../reducers/task.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Task[];

  login: boolean;

  tasks$: Observable<Task[]>;

  login$: Observable<boolean>;

  selectedTask: Task;

  constructor(
    private taskService: TaskService,
    private store: Store<fromTask.State>,
  ) {
  }

  ngOnInit() {
    this.login$ = this.store.pipe(select(fromTask.getLogin));
    this.login$._isScalar = true;
    console.log(this.login$);
    this.getTasks();
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
    this.store.dispatch(new Update());
  }

  update() {
    this.store.dispatch(new Update());
  }

  getTasks(): void {
    console.log('getTasks実行されました');
    this.store.dispatch(new GetAll());
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
