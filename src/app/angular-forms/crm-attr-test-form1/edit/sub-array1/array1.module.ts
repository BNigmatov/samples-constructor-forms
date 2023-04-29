import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormEditSubCrmAttrTestForm1Array1Component } from './array1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [FormEditSubCrmAttrTestForm1Array1Component],
  exports: [FormEditSubCrmAttrTestForm1Array1Component],
})
export class FormEditSubCrmAttrTestForm1Array1Module {}
