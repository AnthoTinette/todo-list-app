import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  isEdited = false;
  
  constructor() { }

  ngOnInit() {
  }

  toggleEdit() {
    this.isEdited = !this.isEdited;
    console.log(this.isEdited)
  }

}
