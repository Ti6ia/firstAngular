import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersNewComponent } from './users-new/users-new.component';
import { UsersShowComponent } from './users-show/users-show.component';

const routes: Routes = [
  { path: '', component: UsersIndexComponent },
  { path: 'new', component: UsersNewComponent },
  { path: ':id', component: UsersShowComponent },
  { path: 'edit/:id', component: UsersEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
