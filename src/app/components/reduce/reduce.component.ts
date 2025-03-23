import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/model';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.scss']
})
export class ReduceComponent implements OnInit {

  arr: number[] = [1, 2, 3, 4, 5]
  arr1: Person[] = [
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
      surname: 'Ibishi',
      age: 28,
      genderId: 1,
      eyesId: 2
    },
    {
      id: 3,
      name: 'Nazif',
      surname: 'Ibishi',
      age: 51,
      genderId: 2,
      eyesId: 1
    }
  ]


  constructor() { }

  ngOnInit(): void {


    const rez = this.arr1.reduce((a, b) => a + b.age!, 0)

    const rez1 = this.arr.reduce((a, b) => {
      return a + b
    }, 0)
    console.log(rez1);

    // console.log(rez);

  }

}
