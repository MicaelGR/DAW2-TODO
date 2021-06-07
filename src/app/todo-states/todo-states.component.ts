import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { TodoState } from '../TodoState.enum';

@Component({
  selector: 'app-todo-states',
  templateUrl: './todo-states.component.html',
  styleUrls: ['./todo-states.component.scss']
})
export class TodoStatesComponent implements OnInit {

  public _activeValue = "";
  todoStateService: TodoService;
  state: FormControl;

  constructor(private todoService: TodoService) {
    this.state = new FormControl();
    this.todoStateService = this.todoService;
   }

  ngOnInit(): void {
    //this.state.valueChanges.subscribe(() => { if(this._activeValue != "") {this.todoStateService.setCurrentState(this.state.value)}});
  }

  onChange(event: any) {
    if (this._activeValue === event.value) {
      this._activeValue = "";
      //this.todoStateService.setCurrentState(null);
    } else {
      this._activeValue = event.value;
    }
  }
}
