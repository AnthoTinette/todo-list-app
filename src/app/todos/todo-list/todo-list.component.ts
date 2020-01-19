import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [
    new Todo('Call James Gordon', 'TODO', '22/01/2020', 0),
    new Todo('Call James Gordon', 'TODO', '22/01/2020', 0)
  ];

  constructor() { }

  ngOnInit() {
  }

}
