import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gemstoneSort'
})
export class GemstoneSortPipe implements PipeTransform {

  transform(value: any[]): any {
    if(!value || value.length == 0) {
      return value;
    }

    return value.sort((a: { name: string, amount: number }, b: { name: string, amount: number }) => {
      if(b.name > a.name) {
        return 1;
      }

      if(a.name > b.name) {
        return -1;
      }

      return 0;
    });
  }
}
