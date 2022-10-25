import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DeleteDialogComponent } from './delete-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslocoRootModule } from 'src/app/transloco-root.module';


@NgModule({
  declarations: [
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    TranslocoRootModule
  ],
  exports: [
    DeleteDialogComponent
  ]
})
export class DeleteDialogModule { }
