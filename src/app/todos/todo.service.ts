import { EventEmitter } from '@angular/core';

import { Todo } from './todo.model';
import { Subject } from 'rxjs';


export class TodoService {
    todoSelected = new EventEmitter<Todo>();
    startedEditing = new Subject<number>();

    private todos: Todo[] = [
        new Todo('Call James Gordon', 'Call James Gordon before lunch. He seems to be sad.', false),
        new Todo('Reply to Juste Leblanc', 'I have to reply to Juste Leblanc in order to prepare our next hollidays !', false),
        new Todo('Go for a walk with John Doe', 'Walk in the forest with John Doe. Note to myself : do no present him my wife...', false),
        new Todo('Meet Batman', 'Try to meet batman. It will be hard !', true)
    ];

    getTodos() {
        return this.todos;
    }

    getTodo(index: number) {
        return this.todos[index];
    }

    addTodos(todo : Todo) {
        // todo.date = 
        this.todos.unshift(todo);
    }

    updateTodo(index: number, newTodo: Todo) {
        this.todos[index] = newTodo;
    }

    deleteTodo(index: number) {
        this.todos.splice(index, 1);
    }
}