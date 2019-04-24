import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 1, done: false, name: 'ngrx' },
      { id: 2, done: true, name: 'angular' },
      { id: 3, done: false, name: 'test1' },
      { id: 4, done: true, name: 'test2' },
      { id: 5, done: true, name: 'test4' },
      { id: 6, done: false, name: 'test5' },
      { id: 7, done: true, name: 'test0' },
      { id: 8, done: false, name: 'test99' },
      { id: 9, done: false, name: '123' }
    ];
    return { tasks };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}
