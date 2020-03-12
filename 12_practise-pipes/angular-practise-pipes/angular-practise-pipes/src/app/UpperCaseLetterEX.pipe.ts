import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'upperCaseLetterEX'
})
export class UpperCaseLetterEX implements PipeTransform {

  transform(value: any, upperCaseCounter: number = 2): any {
    let newValue: string = '';
    for (let i = 0; i < value.length; i++) {
      if ((i % upperCaseCounter) === 0) {
        newValue += value[i].toUpperCase();
      } else {
        newValue += value[i];
      }
    }
    return newValue;
  }
}

