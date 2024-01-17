// src/app/todo-list/todo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoHttpService } from '../todo-http.service'; // Importiere TodoHttpService
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoHttpService: TodoHttpService, private router: Router) {}

  ngOnInit(): void {
    // Lade Todos vom HTTP-Service
    this.todoHttpService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  // Markiere ein Todo als abgeschlossen oder nicht abgeschlossen
  toggleCompletion(todo: Todo): void {
    todo.completed = !todo.completed;
    // Aktualisiere das Todo auf dem Server
    this.todoHttpService.updateTodo(todo).subscribe();
  }

  // Lösche ein Todo
  deleteTodo(todo: Todo): void {
    this.todoHttpService.deleteTodo(todo.id).subscribe(() => {
      // Aktualisiere die lokale Liste der Todos nach dem Löschen
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }

  // Navigiere zur Add-Todo-Ansicht
  navigateToAddTodo(): void {
    this.router.navigate(['/add']);
  }
}
