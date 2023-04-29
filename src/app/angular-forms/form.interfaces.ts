import { FormGroup } from '@angular/forms';

export interface IFlexyFormReady {
  form: FormGroup;
  patch?: (data: any) => void;
}

export interface IFlexyFormOptions {
  flexLeft?: number;
  additionalValues?: any;
  is_not_show_minimize?: boolean;
}

