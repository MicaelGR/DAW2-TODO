import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList!: Todo[];
  state!: boolean;
  @Input() statess!: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodoList$().subscribe(todos => {
      this.todoList = todos;
    });
  }

  todoClosed(todo: Todo): void {
    this.todoService.closeTodo(todo);
  }


}
