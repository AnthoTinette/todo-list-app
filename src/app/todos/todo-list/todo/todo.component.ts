import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
 
  // isEdited = false; 
  
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // toggleEdit() {
  //   this.isEdited = !this.isEdited;
  //   console.log(this.isEdited)
  // }

  onSelected() {
    this.todoService.todoSelected.emit(this.todo);
  }

  // onStateChange() {
  //   this.todoService.updateTodos.emit(this.todo);
  // }

}
