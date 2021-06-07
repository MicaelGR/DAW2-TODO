import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from '../interfaces/todo';
import { TodoState } from '../TodoState.enum';
import { TodoStorageService } from './todo-storage.service';

const todosListKey = "TODOs-List";
const todosClosedListKey = "TODOs-Closed-List";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList: Todo[];
  private todoList$: Subject<Todo[]>;

  private todoClosedList: Todo[];
  private todoClosedList$: Subject<Todo[]>;

  private defaultFilter: string;

  constructor(private storage: TodoStorageService) {
    this.todoList = this.storage.getData(todosListKey);
    this.todoList$ = new Subject();
    this.todoList$.next(this.todoList);

    this.todoClosedList = this.storage.getData(todosClosedListKey);
    this.todoClosedList$ = new Subject();

    this.defaultFilter = "Fecha";
  }

  // Adds a todo and then sorts the list
  addTodo(todo: Todo): void {
    this.todoList.push(todo);
    this.saveTodos();
    this.todoList$.next(this.todoList);
    this.sortBy();
  }

  getTodoList$(): Observable<Todo[]> {
    return this.todoList$.asObservable();
  }

  getTodoCloseList$(): Observable<Todo[]> {
    return this.todoClosedList$.asObservable();
  }

   // Returns current filter method
  getCurrentFilter(): string {
    return this.defaultFilter;
  }

  setFilter(filterValue: string) {
    this.defaultFilter = filterValue;
  }

  deleteTodo(todo: Todo) {
    let index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
    this.saveTodos();
    this.sortBy();
  }

  // Swap between Todos list
  closeTodo(todo: Todo): void {
    let index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
    this.saveTodos();
    this.todoClosedList.push(todo);
    this.saveClosedTodos();
    this.todoClosedList$.next(this.todoClosedList);
  }

  //Swap between Todos list
  pendingTodo(todo: Todo): void {
    let index = this.todoClosedList.indexOf(todo);
    this.todoClosedList.splice(index, 1);
    this.saveClosedTodos();
    this.todoList.push(todo);
    this.saveTodos();
  }

  sortBy(): void {
    this.todoList = this.todoList.sort((a ,b) => {
      let first = "";
      let second = "";
      if (this.getCurrentFilter() == "OrdenAlfabetico") {
        first = a.title.toUpperCase();
        second = b.title.toUpperCase();
      } else if (this.getCurrentFilter() == "Fecha") {
        first = a.date.toString().toUpperCase();
        second = b.date.toString().toUpperCase();
      } else {
        first = a.state.toString().toUpperCase();
        second = b.state.toString().toUpperCase();
      }
      return (first < second) ? -1 : (first > second) ? 1 : 0;
    });
  }

  private saveTodos() {
    this.storage.setData(todosListKey, this.todoList);
  }
  private saveClosedTodos() {
    this.storage.setData(todosClosedListKey, this.todoClosedList);
  }
}
