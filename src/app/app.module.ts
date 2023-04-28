import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrmAttrTestForm1EditModule } from './angular-forms/crm-attr-test-form1/edit';
import { CrmAttrTestForm1PreviewModule } from './angular-forms/crm-attr-test-form1/preview';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    CrmAttrTestForm1EditModule,
    CrmAttrTestForm1PreviewModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
