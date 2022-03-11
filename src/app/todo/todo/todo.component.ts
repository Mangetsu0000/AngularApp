import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[] = [];
  todo = new Todo();   //new Todo() creates a variable that contains a reference to the object Todo(). To fix this we need to create a new object for every element. In the addTodo() method (this.todo = new Todo)  

  constructor(private todoService: TodoService){}
  
  ngOnInit(): void {
    this.todos = this.todoService.getTodos();   //we get the todos[] from the service and store it our component todos[]
  }

  addTodo(){
    this.todoService.addTodo(this.todo);
    this.todo = new Todo;
  }
  
  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo);
  }
  
}

