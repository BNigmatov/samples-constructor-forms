import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ICrmAttrTestForm1 } from '../crm-attr-test-form1.interface';

@Component({
  selector: 'crm-attr-test-form1-preview',
  styleUrls: ['crm-attr-test-form1-preview.component.scss'],
  templateUrl: 'crm-attr-test-form1-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrmAttrTestForm1Component implements OnInit {
  @Input() values: ICrmAttrTestForm1;

  options_select1: any[];
  options_radio1: any[];

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
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
}
