import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFlexyFormReady } from './angular-forms/form.interfaces';
import { IFormCrmAttrTestForm1 } from './angular-forms/crm-attr-test-form1/interfaces';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  form: FormGroup;

  formValues: any;
  loading: boolean;

  constructor() {
    this.form = new FormGroup({});
  }

  initForm(ready: IFlexyFormReady) {
    this.form = ready.form;

    setTimeout(() => {
      const sampleValues: IFormCrmAttrTestForm1 = {
        string1: 'Test String1',
        textarea1: 'Test Text1',
        number1: 1,
        date1: new Date('2023-01-01'),
        select1: '02',
        option1: '02',
        object1: {
          obj1_str1: 'Test Object String 1',
          obj1_num1: 11,
        },
        array1: [
          {
            arr1_str1: 'Test Array String 1',
            arr1_num1: 111,
          },
          {
            arr1_str1: 'Test Array String 2',
            arr1_num1: 222,
          },
        ],
      };
      this.formValues = sampleValues; // TEST

      this.form.patchValue(sampleValues);
      if (ready.patch) {
        ready.patch(sampleValues);
      }
    }, 700);

    setTimeout(() => {
      this.submit();
    }, 3_000);
  }

  submit() {
    const values: any = this.form.getRawValue();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.formValues = values;
    }, 1_000);
  }
}
