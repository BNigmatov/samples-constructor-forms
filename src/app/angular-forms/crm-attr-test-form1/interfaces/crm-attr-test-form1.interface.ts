import { IFormCrmAttrTestForm1Object1 } from './crm-attr-test-form1-object1.interface';
import { IFormCrmAttrTestForm1Array1 } from './crm-attr-test-form1-array1.interface';

/**
 * Text?
 */
export interface IFormCrmAttrTestForm1 {
  /**
   * Label String 1
   */
  string1: string;

  /**
   * Label Textarea 1
   */
  textarea1: string;

  /**
   * Label Number 1
   */
  number1?: number;

  /**
   * Label Date 1
   */
  date1?: Date;

  /**
   * Label Select 1
   */
  select1?: string;

  /**
   * Label Radio 1
   */
  option1?: string;

  /**
   * Label Object 1
   */
  object1?: IFormCrmAttrTestForm1Object1;

  /**
   * Label Array 1
   */
  array1?: IFormCrmAttrTestForm1Array1[];
}
