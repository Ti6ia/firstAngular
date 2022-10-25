import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TranslocoRootModule } from 'src/app/transloco-root.module';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    TranslocoRootModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
