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

  refs: any = {};

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      const options_select1 = [
        {
          id: '01',
          title: 'Select 01',
        },
        {
          id: '02',
          title: 'Select 02',
        },
      ];
      this.refs.select1 = options_select1.reduce((obj, option) => {
        obj[option.id] = option.title;
        return obj;
      }, {} as any);
      this._changeDetectorRef.markForCheck();
    }, 3_000);

    setTimeout(() => {
      const options_radio1 = [
        {
          id: '01',
          title: 'Option 01',
        },
        {
          id: '02',
          title: 'Option 02',
        },
      ];
      this.refs.radio1 = options_radio1.reduce((obj, option) => {
        obj[option.id] = option.title;
        return obj;
      }, {} as any);

      this._changeDetectorRef.markForCheck();
    }, 2_000);
  }
}
