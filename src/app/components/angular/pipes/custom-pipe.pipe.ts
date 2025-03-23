import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  nvalue!: string;

  transform(value: any, ...args: any[]): any {
    console.log(value);

    // this.nvalue = value.split('').reverse().join('');
    console.log(this.nvalue);

    return this.nvalue;
  }

}
