import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService} from '../../shared/services/todo.service';
import { Todo} from '../../shared/models/Todo';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {
  title = 'todo-list';

  todo$ = [];

  data: Todo;

  constructor(private todoService: TodoService) {

  }
  ngOnInit() {
    this.todo$ = this.todoService.getTodoList();
    this.data = {
      id: '',
      title:  '',
      completed: false
    };


  }

  ngOnDestroy() {
    this.todo$.splice(0, this.todo$.length);
}

   addTodo() {
     if (this.data.title !== '') {
      this.todoService.addTodo(this.data);
      this.todo$.splice(0, this.todo$.length);
      this.data.title = '';
     }
   }

   onDelete(id) {
     this.todoService.deleteTodo(id);
     this.todo$.splice(0, this.todo$.length);
   }
}
