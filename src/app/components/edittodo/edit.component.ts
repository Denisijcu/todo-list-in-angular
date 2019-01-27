import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService} from '../../shared/services/todo.service';
import { Todo} from '../../shared/models/Todo';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditTodoComponent implements OnInit {
  data: Todo;
  todo$ = [
  ];
  id: string = '';
  constructor(private todoService: TodoService,  private route: ActivatedRoute,
    private router: Router, private location: Location,  private flashMessage: FlashMessagesService) {}
  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.data = {
      id: '',
      title:  '',
      completed: false
    };

   this.todoService.getTodoId(this.id);
   this.todo$ = this.todoService.todoArray;

  }

   onSave(title) {
      this.data = {
        id: this.id,
        title,
        completed: false
      };
     this.todoService.updateTodo(this.data);
    /*
     this.flashMessage.show('Please fill out the form correctly', {
      cssClass: 'alert-danger', timeout: 4000
  });
  */
    // this.location.back();
    this.router.navigate(['/todos']);
   }
}
