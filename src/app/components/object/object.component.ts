import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/model';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  obj = {
    id: 1,
    name: 'Juled',
    arr: [1, 2, 3, {
      surname: 'Ibishi'
    }],
    isProgramer: true,
    testObj: {
      color: 'red',
      status: false
    }
  }

  obj3 = {
    "id": 36,
    "isProgramer": true,
    "array72": [{
      email: 'xhulo@gmail.com'
    }, 3,
    [{
      isProgramer: false, a: 's'
    }, [{ age: 25 }], 2,], 33],
    object: {
      size: 72,
      married: false,
      kg: '85'
    }
  }

  person: Person = {
    id: 1,
    name: 'test',
    surname: 'bishi'
  }

  constructor() { }

  ngOnInit() {

    // let prop: any = this.obj3.array72

    // let prop2: any = prop[2]

    // let prop3: any = prop2[0]

    // let prop4 = prop3.a

    // console.log(prop4);



    let obj7 = {

      id: this.person.id,
      name: this.person.name,
      surname: 'kaloshi'
    }


    let obj8 = {
      ...this.person,
      surname: 'gaga'
    }
    console.log(obj8);

    //console.log(obj7);




    // Menyra e 1
    // let prop: any = this.obj.arr[3];

    // let obj = prop.surname;

    // console.log(obj);

    // Menyra e 2
    // let id = this.obj['id'];

    // console.log(id);

  }

}
