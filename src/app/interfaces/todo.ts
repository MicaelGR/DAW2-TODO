import { TodoState } from '../TodoState.enum';

export interface Todo {
  title: string;
  date: Date;
  state: TodoState;
}
