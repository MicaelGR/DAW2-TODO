import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent implements OnInit {

  filter: FormControl;
  todoFilterService: TodoService;

  constructor(private todoService: TodoService) {
    this.todoFilterService = todoService;
    this.filter = new FormControl();
  }

  ngOnInit(): void {
    this.filter.valueChanges.subscribe(x => {this.todoFilterService.setFilter(this.filter.value), this.todoFilterService.sortBy()});
  }
}
