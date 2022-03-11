import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] =[];

  constructor() {}

  getTodos():Todo[]{                        //returns todos[] so we can store in the components todos[]
    return this.todos;
  }

  logTodos(): void{
    console.log(this.todos);
  }

  addTodo(todo: Todo): void{
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo): void{
    const index =this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    }
  }
  

