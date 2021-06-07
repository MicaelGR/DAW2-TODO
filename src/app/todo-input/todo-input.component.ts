import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { TodoState } from '../TodoState.enum';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {

  todoInputService: TodoService;
  todoTitle: FormControl;

  constructor(private todoService: TodoService) {
    this.todoInputService = this.todoService;
    this.todoTitle = new FormControl();
  }

  addTodo(): void {
    this.todoTitle.value.search(/[\S]/gi) != -1
      ? this.todoInputService.addTodo({title: this.todoTitle.value, date: new Date(), state: TodoState.pending})
      : alert("No puedes añadir un Todo vacío");

  }
}
