import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import * as TaskActions from '../state/core.action';
import * as fromCore from '../state';
import { Task } from '../task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location,
    private store: Store<fromCore.State>
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id)
      .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

  save(task: Task): void {
    this.store.dispatch(new TaskActions.Update({ task }));
    this.taskService.updateTask(this.task)
      .subscribe(() => this.goBack());
  }
}
