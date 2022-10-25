import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersEditComponent } from './pages/users/users-edit/users-edit.component';
import { UsersIndexComponent } from './pages/users/users-index/users-index.component';
import { UsersNewComponent } from './pages/users/users-new/users-new.component';
import { UsersShowComponent } from './pages/users/users-show/users-show.component';

const routes: Routes = [
  { path: 'users', component: UsersIndexComponent},
  { path: 'users/new', component: UsersNewComponent},
  { path: 'users/:id', component: UsersShowComponent},
  { path: 'users/edit/:id', component: UsersEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
