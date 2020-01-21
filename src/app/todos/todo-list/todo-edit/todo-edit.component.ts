import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Todo } from '../../todo.model';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) todoForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.subscription = this.todoService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.todoService.getTodo(index);
        this.todoForm.setValue({
          taskName: this.editedItem.name,
          taskDescription: this.editedItem.description,
          taskState: this.editedItem.state
        })
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newTodo = new Todo(value.taskName, value.taskDescription, value.taskState);
    if(this.editMode) {
      this.todoService.updateTodo(this.editedItemIndex, newTodo)
    } else {
      this.todoService.addTodos(newTodo);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.todoForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.todoService.deleteTodo(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
