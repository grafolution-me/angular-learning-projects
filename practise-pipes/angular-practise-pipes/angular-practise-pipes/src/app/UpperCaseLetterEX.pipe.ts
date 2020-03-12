import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'upperCaseLetterETwo'
})
export class UpperCaseLetterEX implements PipeTransform {

  transform(value: any, upperCaseCounter: number = 2): any {
    let newValue: string = '';
    let counter = 0;
    for (let i = 0; i < (value as string).length; i++) {
      if ((upperCaseCounter % 2) === 0 ) {

        newValue += value[i].toUpperCase();
      } else {
        newValue += value[i];
      }
    }
    return newValue;
  }
}

