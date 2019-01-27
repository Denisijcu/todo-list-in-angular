import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../shared/services/todo.service';
import { Todo } from '../../shared/models/Todo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todo$ = [];
  data: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todo$ = this.todoService.getTodoList();
  }

  onCheck(id, title, completed) {
    console.log('Check clicked');
    completed = !completed;
    this.data = {
      id,
      title,
      completed
    };
   this.todoService.updateTodo(this.data);
   this.todo$.splice(0, this.todo$.length);
   this.ngOnInit();
  }
}
