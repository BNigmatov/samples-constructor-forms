import { IFormCrmAttrTestForm1 } from '../interfaces';

// TEMP
export const CrmAttrTestForm1Validator = (
  data: IFormCrmAttrTestForm1
): string | IFormCrmAttrTestForm1 => {
  if (!data.number1) {
    data.number1 = 222;
  }
  if (!data.select1) {
    return 'Error: Select 1';
  }
  return data;
};
