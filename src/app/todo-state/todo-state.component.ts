import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { TodoState } from '../TodoState.enum';

@Component({
  selector: 'app-todo-state',
  templateUrl: './todo-state.component.html',
  styleUrls: ['./todo-state.component.scss']
})
export class TodoStateComponent implements OnInit {

  state: FormControl;
  todoFilterService: TodoService;
  public _activeValue = "";

  constructor(private todoService: TodoService) {
    this.todoFilterService = todoService;
    this.state = new FormControl();
  }

  ngOnInit(): void {
    //this.state.valueChanges.subscribe(x => {this.todoFilterService.setTodoState(this.state.value), this.todoFilterService.swapFilterBy$()});
  }


  onChange(event: any) {
    if (this._activeValue === event.value) {
      this._activeValue = "";
    } else {
      this._activeValue = event.value;
    }
  }

}
