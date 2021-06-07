import { Component, Input, OnInit, Output, EventEmitter, NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';
import { TodoState } from '../TodoState.enum';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem!: Todo;
  @Output() changeState: EventEmitter<Todo> = new EventEmitter<Todo>();
  todoItemService: TodoService;
  updating: boolean;
  todoTitle: FormControl;
  completed!: boolean;
  states: string[] = [TodoState.pending.toString(), TodoState.onProgress.toString()];

  constructor(private todoService: TodoService) {
    this.todoItemService = todoService;
    this.updating = false;
    this.todoTitle = new FormControl();
  }

  ngOnInit(): void {
    this.todoItem.state == TodoState.pending ? this.completed = false : this.completed = true;
  }

  onChange(): void {
    this.todoItem.state == TodoState.completed ? this.todoItem.state = TodoState.pending : this.todoItem.state = TodoState.completed;
    this.changeState.emit(this.todoItem);
  }

  updateBtn() {
    this.updating = true;
  }
  updateTodo() {
    if(this.todoTitle.value.search(/[\S]/gi) != -1) {
      this.todoItem.title = this.todoTitle.value
    } else {
      alert("No puedes dejar el título en blanco");
    }
    this.updating = false;
  }

  deleteTodo() {
    this.todoItemService.deleteTodo(this.todoItem);
  }
}
