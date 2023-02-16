import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterPrice: number, propName: string): any[] {
    const returnArray = [];

    if (value.length === 0 || filterPrice === 0 || propName === '') {
      return value;
    }

    for (const item of value) {
      if (item[propName] < filterPrice || item[propName] === filterPrice) {
        returnArray.push(item)
      }
    }
    return returnArray;
  }

}
