import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersNewComponent } from './users-new/users-new.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersShowComponent } from './users-show/users-show.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { FormModule } from 'src/app/components/form/form.module';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DeleteDialogModule } from 'src/app/components/delete-dialog/delete-dialog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { TranslocoRootModule } from 'src/app/transloco-root.module';



@NgModule({
  declarations: [
    UsersNewComponent,
    UsersEditComponent,
    UsersShowComponent,
    UsersIndexComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatGridListModule,
    MatDialogModule,
    FormModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    DeleteDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    TranslocoRootModule
  ]
})

export class UsersModule { }
