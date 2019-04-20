import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { MessageService } from './message.service'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Task } from '../task';
import { of } from 'rxjs';

describe('TaskService', () => {
  let httpClientSpy: {
    get: jasmine.Spy,
    post: jasmine.Spy,
    put: jasmine.Spy, 
    delete: jasmine.Spy
  };
  let messageService: MessageService;
  let taskService: TaskService;

  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]
  }));

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'put', 'post', 'delete']);
    messageService = jasmine.createSpyObj('MessageService', ['add']);
    taskService = new TaskService(<any> httpClientSpy, messageService);
  })

  it('should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });

  it('expects a GET request getTasks', () => {
    const expectedTasks: Task[] =[
      { id: 1, done: false, name: 'ngrx' },
      { id: 2, done: true, name: 'AngularTutorial' }
    ];
    httpClientSpy.get.and.returnValue(of(expectedTasks));
    taskService.getTasks().subscribe(
      tasks => expect(tasks).toEqual(expectedTasks),
      fail
    );
  });

  it('expects a GET request getTasks Error', () => {
    httpClientSpy.get.and.throwError('Get Tasks Error');
    expect(taskService.getTasks()).toThrow();
  });

  it('expects a GET request getTask', () => {
    const expectedTask: Task = {
      id: 1, done: false, name: 'ngrx' 
    };
    httpClientSpy.get.and.returnValue(of(expectedTask));
    taskService.getTask(1).subscribe(
      tasks => expect(tasks).toEqual(expectedTask),
      fail
    );
  });

  it('expects a GET request search', () => {
    const expectedTask: Task[] = [{
      id: 1, done: false, name: "ngrx" 
    }];
    httpClientSpy.get.and.returnValue(of(expectedTask));
    taskService.searchTasks("ngrx").subscribe(
      tasks => expect(tasks).toEqual(expectedTask),
      fail
    );
  });

  it('expects a GET request search empty', () => {
    const expectedTask: Task[] = [];
    httpClientSpy.get.and.returnValue(of(expectedTask));
    taskService.searchTasks("").subscribe(
      tasks => expect(tasks).toEqual(expectedTask),
      fail
    );
  });

  it('expects a GET request addTask', () => {
    const expectedTask: Task = {id:1, done:true,name:'AngularTutorial'};
    httpClientSpy.post.and.returnValue(of(expectedTask));
    taskService.addTask(expectedTask).subscribe(
      tasks => expect(tasks).toEqual(expectedTask),
      fail
    );
  });

  it('expects a GET request updateTask', () => {
    const expectedTask: Task = {id:1, done:true,name:'AngularTutorial'};
    httpClientSpy.put.and.returnValue(of(expectedTask));
    taskService.updateTask(expectedTask).subscribe(
      tasks => expect(tasks).toEqual(expectedTask),
      fail
    );
  });

  it('expects a GET request deleteTask', () => {
    const expectedTask: Task = {id:1, done:true,name:'AngularTutorial'};
    httpClientSpy.delete.and.returnValue(of(expectedTask));
    taskService.deleteTask(expectedTask).subscribe(
      tasks => expect(tasks).toEqual(expectedTask),
      fail
    );
  });
});
