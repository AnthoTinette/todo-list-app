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
    new Todo('Reply to Juste Leblanc', 'IN PROGRESS', '24/01/2020', 1),
    new Todo('Go for a walk with John Doe', 'DONE', '19/01/2020', 2),
    new Todo('Meet Batman', 'CANCELED', '12/01/2020', 3)
  ];

  constructor() { }

  ngOnInit() {
  }

}
