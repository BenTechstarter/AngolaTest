import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoHttpService } from './todo-http.service';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'add', component: AddTodoComponent },
];

@NgModule({
  declarations: [AppComponent, TodoListComponent, AddTodoComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, RouterModule.forRoot(routes)],
  providers: [TodoHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
