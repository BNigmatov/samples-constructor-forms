import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormEditSubCrmAttrTestForm1Object1Component } from './object1.component';
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
  declarations: [
    FormEditSubCrmAttrTestForm1Object1Component,
  ],
  exports: [FormEditSubCrmAttrTestForm1Object1Component],
})
export class FormEditSubCrmAttrTestForm1Object1Module {}
