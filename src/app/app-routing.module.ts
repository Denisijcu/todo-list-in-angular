import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent} from './components/header/header.component';
import { TodosComponent} from './components/todos/todos.component';
import { EditTodoComponent} from './components/edittodo/edit.component';
import { AboutComponent} from './components/about/about.component';
const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent},
  { path: 'todos', component: TodosComponent},
  { path: 'edit/:id', component: EditTodoComponent},
  { path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
