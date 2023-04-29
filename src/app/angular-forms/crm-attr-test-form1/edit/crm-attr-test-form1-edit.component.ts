import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  options_select1: any[];
  options_radio1: any[];

  constructor(
    public dialog: MatDialog,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
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
    }, 2_000);
  }

  patchForm(values: any) {
    console.log('PatchValues', values);
  }

  initSubObject(name: string, ready: IFlexyFormReady) {
    this.form.setControl(name, ready.form);
  }

  initSubForm(name: string, ready: IFlexyFormReady) {
    this.form.setControl(name, ready.form);
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
      console.log('The dialog was closed', result);
    });
  }
}
