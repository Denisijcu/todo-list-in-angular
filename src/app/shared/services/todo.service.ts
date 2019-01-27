import { Injectable, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import {Todo} from '../models/Todo';
//import { Observable } from 'rxjs';
//import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements OnInit {
  todoCollectionRef: AngularFirestoreCollection<Todo>;
  todoDoc: AngularFirestoreDocument<Todo>;
  //todo$: [];
  public todoArray = [];
  id: string;
  //public title: string;
  constructor(private afs: AngularFirestore) {
  // this.todoArray = [];
    this.todoCollectionRef = this.afs.collection<Todo>('todo');
    this.todoCollectionRef.snapshotChanges().subscribe(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Todo;
        const id = action.payload.doc.id;
        //** **/
         data.id = id;
         this.todoArray.push(data);
        //** **/
        return { id, ...data };
      });
    });
  }

  ngOnInit() {
    this.todoArray.slice(0, this.todoArray.length);
  }

  getTodoId(id: String) {
    this.todoDoc = this.afs.doc<Todo>(`todo/${id}`);
    this.todoDoc.snapshotChanges().subscribe( action => {
         if (action.payload.exists === false) {
          return null;
      } else {
          const data = action.payload.data() as Todo;
          data.id = action.payload.id;
          this.todoArray.push(data);
          return data;
      }
    });
}

  getTodoList() {
    return this.todoArray;
  }

  addTodo(todo: Todo) {
    this.todoCollectionRef.add(todo);
  }

  updateTodo(todo: Todo) {
    this.todoCollectionRef.doc(todo.id).update(todo) ;
  }

  deleteTodo(id) {
    this.todoCollectionRef.doc(id).delete();
  }
}
