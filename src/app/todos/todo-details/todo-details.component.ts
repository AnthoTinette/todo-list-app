import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  isEditMode = false;

  @Input() todo: Todo;
  constructor() { }

  ngOnInit() {
  }

  getEditmode() {
    this.isEditMode = true;
  }

  saveEditTodo() {
    this.isEditMode = false;
  }

  

}
