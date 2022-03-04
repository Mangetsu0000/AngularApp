import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService){}
  name: string = '';
  content: string = '';
  todos:Todo[] = [];

  ngOnInit(): void {
    
    
    this.todoService.addTodo(this.todos)
    this.todoService.getTodos();
    this.todoService.logTodos(); 
  }
  fillTodo(){
    this.todos.push({
    name: this.name,
    content: this.content
  })}
}

