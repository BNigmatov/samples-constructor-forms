import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { FormEditCrmAttrTestForm1Component } from './crm-attr-test-form1-edit.component';
import { FormEditSubCrmAttrTestForm1Object1Module } from './sub-object1/object1.module';
import { FormEditSubCrmAttrTestForm1Array1Module } from './sub-array1/array1.module';
import { FormEditSubCrmAttrTestForm1Join1Module } from './sub-join1/join1.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    FormEditSubCrmAttrTestForm1Object1Module,
    FormEditSubCrmAttrTestForm1Array1Module,
    FormEditSubCrmAttrTestForm1Join1Module,
  ],
  declarations: [FormEditCrmAttrTestForm1Component],
  exports: [FormEditCrmAttrTestForm1Component],
})
export class FormEditCrmAttrTestForm1Module {}
