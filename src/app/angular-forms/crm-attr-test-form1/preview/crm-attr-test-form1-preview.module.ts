import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { FormPreviewCrmAttrTestForm1Component } from './crm-attr-test-form1-preview.component';
import { FormPreviewSubCrmAttrTestForm1Object1Module } from './sub-object1/object1.module';
import { FormPreviewSubCrmAttrTestForm1Array1Module } from './sub-array1/array1.module';

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
    FormPreviewSubCrmAttrTestForm1Object1Module,
    FormPreviewSubCrmAttrTestForm1Array1Module,
  ],
  declarations: [FormPreviewCrmAttrTestForm1Component],
  exports: [FormPreviewCrmAttrTestForm1Component],
})
export class FormPreviewCrmAttrTestForm1Module {}
