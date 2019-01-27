import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase Setup
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


// Components setup
import {HeaderComponent} from './components/header/header.component';
import {TodosComponent} from './components/todos/todos.component';
import {EditTodoComponent} from './components/edittodo/edit.component';
import {AboutComponent} from './components/about/about.component';


// Services
import { TodoService} from './shared/services/todo.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';


import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    EditTodoComponent,
    AboutComponent,
    NavbarComponent,
    ContactComponent

  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
     AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    TodoService,
    { provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
