import { FormGroup } from '@angular/forms';

export interface IFlexyFormReady {
  form: FormGroup;
  patch?: (data: any) => void;
}
