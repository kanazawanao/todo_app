import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  task: Task = {
    id: 1,
    state: "done",
    description: "ngrxってどんなものか知りたい"
  };
  constructor() { }

  ngOnInit() {
  }

}
