import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textUppercase'
})
export class TextUppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {



    return value.toUpperCase();
  }

}
