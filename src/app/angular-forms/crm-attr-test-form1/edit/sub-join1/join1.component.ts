import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'form-edit-crm-attr-test-form1',
  styleUrls: ['join1.component.scss'],
  templateUrl: 'join1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormEditCrmAttrTestForm1Join1DialogComponent {
  form: FormGroup = new FormGroup({
    result: new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<FormEditCrmAttrTestForm1Join1DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  submit(): void {
    const formValues: any = this.form.getRawValue();
    this.dialogRef.close(formValues);
  }
}
