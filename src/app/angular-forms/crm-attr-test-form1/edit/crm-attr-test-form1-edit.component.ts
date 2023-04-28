import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFlexyFormReady } from '../../form.interfaces';

@Component({
  selector: 'crm-attr-test-form1-edit',
  styleUrls: ['crm-attr-test-form1-edit.component.scss'],
  templateUrl: 'crm-attr-test-form1-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrmAttrTestForm1EditComponent implements OnInit {
  @Output() formReady: EventEmitter<IFlexyFormReady> =
    new EventEmitter<IFlexyFormReady>();

  form: FormGroup;

  options_select1: any[];
  options_radio1: any[];

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    this.form = new FormGroup({
      string1: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      textarea1: new FormControl('', [
        Validators.required,
        Validators.maxLength(1111),
      ]),
      select1: new FormControl('', [Validators.required]),
      option1: new FormControl('', [Validators.required]),
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
