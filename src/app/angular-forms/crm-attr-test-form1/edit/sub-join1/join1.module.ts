import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormEditCrmAttrTestForm1Join1DialogComponent } from './join1.component';
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
    FormEditCrmAttrTestForm1Join1DialogComponent,
  ],
  exports: [FormEditCrmAttrTestForm1Join1DialogComponent],
})
export class FormEditSubCrmAttrTestForm1Join1Module {}
