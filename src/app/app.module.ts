import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { TaskSearchComponent } from './task-search/task-search.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TaskSearchComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    HttpClientModule,

  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  // and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
  HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
