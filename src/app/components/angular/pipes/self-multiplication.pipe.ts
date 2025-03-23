import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'selfMultiplication'
})
export class SelfMultiplicationPipe implements PipeTransform {


  transform(value: number, ...args: unknown[]): unknown {

    let result = value + value;

    return result;

  }

}
