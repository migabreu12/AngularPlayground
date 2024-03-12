import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseName'
})
export class ReverseNamePipe implements PipeTransform {

  transform(value: string): string {
    let reverseName = "";
    for (let letter of [...value]) {
      reverseName = letter + reverseName;
    }

    return reverseName;
  }
}
