import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
export class CustumValidators {
  private static forbiddenProjectNames = ['Test'];

  static forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (!CustumValidators.forbiddenProjectNames.indexOf(control.value)) {
      return {nameIsForbitten: true};
    } else {
      return null;
    }
  }
  static asyncForbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      if (!CustumValidators.forbiddenProjectNames.indexOf(control.value)) {
        resolve({nameIsForbitten: true});
      } else {
        resolve(null);
      }
    });
    return promise;
  }
}
