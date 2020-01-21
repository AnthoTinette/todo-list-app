import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  isNewTodo = false;

  todos: Todo[];

  constructor(private todoService: TodoService) {
   }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  onTodoCreation() {
    this.isNewTodo = !this.isNewTodo;
  }

  onEditItem(index: number) {
    this.todoService.startedEditing.next(index);
  }
}
