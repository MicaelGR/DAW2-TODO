import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {

  constructor() { }

  getData(key: string): Todo[] {
    let ofertas = localStorage.getItem(key);
    if (ofertas != null) {
      return JSON.parse(ofertas);
    } else {
      return [];
    }
  }

  setData(key: string, data: Todo[]) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

