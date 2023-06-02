import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IFlexyFormOptions, IFlexyFormReady } from '../../form.interfaces';
import { FormEditCrmAttrTestForm1Join1DialogComponent } from './sub-join1/join1.component';

@Component({
  selector: 'form-edit-crm-attr-test-form1',
  styleUrls: ['crm-attr-test-form1-edit.component.scss'],
  templateUrl: 'crm-attr-test-form1-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormEditCrmAttrTestForm1Component implements OnInit {
  @Input() options?: IFlexyFormOptions = {};
  @Output() formReady: EventEmitter<IFlexyFormReady> =
    new EventEmitter<IFlexyFormReady>();

  form: FormGroup;
  formArray1: FormArray;

  options_select1: any[];
  options_radio1: any[];

  constructor(
    public dialog: MatDialog,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this.formArray1 = new FormArray([
      new FormGroup({
        arr1_str1: new FormControl('arr1_str1'),
        arr1_num1: new FormControl('11111111111111'),
        arr1_slct1: new FormControl(''),
        arr1_rdo1: new FormControl(''),
      }),
    ]);

    this.form = new FormGroup({
      string1: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      textarea1: new FormControl('', [
        Validators.required,
        Validators.maxLength(1111),
      ]),
      number1: new FormControl(0, [Validators.required]),
      date1: new FormControl(''),
      select1: new FormControl(''),
      option1: new FormControl(''),
      object1: new FormControl({}),
      array1: this.formArray1,
      join1: new FormControl(''),
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
    }, 1_000);
  }

  patchForm(values: any) {
    console.log('PatchValues', values);
    if (values.array1) {
      this.formArray1.clear();
      for (let arr of values.array1) {
        this.formArray1.push(
          new FormGroup({
            arr1_str1: new FormControl(arr.arr1_str1 || ''),
            arr1_num1: new FormControl(arr.arr1_num1 || 0),
            arr1_slct1: new FormControl(arr.arr1_slct1 || 0),
            arr1_rdo1: new FormControl(arr.arr1_rdo1 || 0),
          })
        );
      }
    }
  }

  initSubObject(name: string, ready: IFlexyFormReady) {
    this.form.setControl(name, ready.form);
  }

  initSubForm(name: string, ready: IFlexyFormReady) {
    this.form.setControl(name, ready.form);
  }

  initSubArrayForm(name: string, ready: IFlexyFormReady, index: number) {
    console.log(index, name, ready);
    if (this.formArray1.length > index) {
      this.formArray1.controls[index] = ready.form;
    } else {
      // this.formArray1.push(ready.form);
    }
  }

  openDialogJoin1(): void {
    const dialogRef = this.dialog.open(
      FormEditCrmAttrTestForm1Join1DialogComponent,
      {
        data: {
          ppp: 111,
        },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed. Result=', result);
    });
  }

  // get bindArray1() {
  //   return this.form.controls['array1'] as FormArray;
  // }

  delElArray1(index: number): void {
    this.formArray1.removeAt(index);
  }

  addElArray1(): void {
    const arr = new FormGroup({
      arr1_str1: new FormControl('ttt', Validators.required),
      arr1_num1: new FormControl(0, Validators.required),
    });
    this.formArray1.push(arr);
  }
}
