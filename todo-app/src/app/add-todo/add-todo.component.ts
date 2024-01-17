// src/app/add-todo/add-todo.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importiere Formular-Module

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  addTodoForm: FormGroup; // Definiere das FormGroup

  constructor(private todoService: TodoService, private router: Router, private formBuilder: FormBuilder) {
    // Initialisiere das FormGroup mit Validierung
    this.addTodoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });
  }

  // Getter für einfachen Zugriff auf Formularfelder
  get form() {
    return this.addTodoForm.controls;
  }

  addTodo(): void {
    // Überprüfe, ob das Formular gültig ist
    if (this.addTodoForm.valid) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.form.title.value,
        completed: false,
      };

      // Füge das neue Todo zum Service hinzu
      this.todoService.addTodo(newTodo);

      // Navigiere zur Todo-Liste-Ansicht
      this.router.navigate(['/']);
    }
  }
}
