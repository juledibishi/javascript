import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectAccess'
})
export class ObjectAccessPipe implements PipeTransform {

  transform(value: any, key: string): any {
    console.log(value);

    console.log(key);


    return value[key];

  }

}
