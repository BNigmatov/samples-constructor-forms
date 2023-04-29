import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFlexyFormReady } from './angular-forms/form.interfaces';

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
      const sampleValues: any = {
        string1: 'init-text-string1',
        textarea1: 'init-text-textarea1',
        select1: '02',
        option1: '02',
        object1: {
          obj1_str1: 'Object String 1',
          obj1_num1: 111,
        },
        array1: [{
          arr1_str1: 'Array String 1',
          arr1_num1: 111,
        }, {
          arr1_str1: 'Array String 2',
          arr1_num1: 222,
        }],
      };

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
