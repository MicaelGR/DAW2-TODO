import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-closed-list',
  templateUrl: './todo-closed-list.component.html',
  styleUrls: ['./todo-closed-list.component.scss']
})
export class TodoClosedListComponent implements OnInit {

  todoClosedList: Todo[] = [];
  todoListService: TodoService;

  constructor(private todoService: TodoService) {
    this.todoListService = this.todoService;
  }

  ngOnInit(): void {
    this.todoListService.getTodoCloseList$().subscribe(todos => {
      this.todoClosedList = todos;

    });
  }

  todoPending(todo: Todo): void {
    this.todoListService.pendingTodo(todo);
  }
}
