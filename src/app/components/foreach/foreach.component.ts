import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/model';
// interface Person {
//   id: number;
//   name: string;
// }

@Component({
  selector: 'app-foreach',
  templateUrl: './foreach.component.html',
  styleUrls: ['./foreach.component.scss']
})
export class ForeachComponent implements OnInit {
  ///void nuk kthen vler

  arr: Person[] = [
    {
      id: 1,
      name: 'Juled',
      surname: 'Ibishi',
      age: 24,
      genderId: 1,
      eyesId: 2
    },
    {
      id: 2,
      name: 'Hasan',
      surname: 'Hasani',
      age: 28,
      genderId: 1,
      eyesId: 2
    }
  ]



  constructor() { }

  ngOnInit(): void {

    // let obj = {
    //   number: 6
    // }

    // this.arr.forEach(x => {
    //   this.copyArr.push(x);
    // })

    // this.copyArr.push(obj.number);

    // console.log(this.copyArr);

    // this.arr.forEach(x => console.log(x))
    const rez = this.arr.find(x => {
      return x.id === 2
    })
    // console.log(rez);


    this.arr.forEach(x => {



      if (x.id === 2) {
        x.name = 'Saqip'
      }
      console.log(x);

    })
    const rez1 = this.arr.find(x => x.surname === 'Ibishi')
    console.log(rez1);

    // me foreach i him mrenda arrayt ene manipulojm me vlerat a arrayt 

    // this.arr.forEach(x => {


    //   if (x.id === 1) {
    //     x.name = 'Leti';
    //   }

    // })


  }
}
