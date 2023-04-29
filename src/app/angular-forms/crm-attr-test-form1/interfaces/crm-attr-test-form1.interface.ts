import { IFormCrmAttrTestForm1Object1 } from './crm-attr-test-form1-object1.interface';
import { IFormCrmAttrTestForm1Array1 } from './crm-attr-test-form1-array1.interface';

export interface IFormCrmAttrTestForm1 {
  string1: string;
  textarea1: string;
  select1?: string;
  option1?: string;
  object1?: IFormCrmAttrTestForm1Object1;
  array1?: IFormCrmAttrTestForm1Array1[];
}
