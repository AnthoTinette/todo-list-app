import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  selectedTodo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.todoSelected.subscribe(
      (todo: Todo) => {
        this.selectedTodo = todo;
      }
    )
  }

}