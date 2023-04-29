import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFlexyFormReady } from '../../../form.interfaces';

@Component({
  selector: 'form-edit-sub-crm-attr-test-form1-object1',
  styleUrls: ['object1.component.scss'],
  templateUrl: 'object1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormEditSubCrmAttrTestForm1Object1Component implements OnInit {
  @Output() formReady: EventEmitter<IFlexyFormReady> =
    new EventEmitter<IFlexyFormReady>();

  form: FormGroup;

  options_select1: any[];
  options_radio1: any[];

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    this.form = new FormGroup({
      obj1_str1: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      obj1_num1: new FormControl(0, [
        Validators.required,
        Validators.max(999),
      ]),
    });
  }

  ngOnInit() {
    if (this.formReady && this.formReady.observers.length > 0) {
      this.formReady.emit({
        form: this.form,
        patch: (vals) => this.patchForm(vals),
      });
    }

    setTimeout(() => {
      this.options_select1 = [
        {
          id: '01',
          title: 'Select 01',
        },
        {
          id: '02',
          title: 'Select 02',
        },
      ];
      this._changeDetectorRef.markForCheck();
    }, 3_000);

    setTimeout(() => {
      this.options_radio1 = [
        {
          id: '01',
          title: 'Option 01',
        },
        {
          id: '02',
          title: 'Option 02',
        },
      ];
      this._changeDetectorRef.markForCheck();
    }, 2_000);
  }

  patchForm(values: any) {
    console.log('PatchValues', values);
  }
}
