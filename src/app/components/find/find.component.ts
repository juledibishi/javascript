import { Component, OnInit } from '@angular/core';
import { Person, Gender, FindPerson } from 'src/app/models/model';
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  // arr: Person[] = [
  //   {
  //     name: 'Luke Skywalker',
  //     height: 172,
  //     mass: 77,
  //     eye_color: 'blue',
  //     gender: 'male',
  //   },
  //   {
  //     name: 'Darth Vader',
  //     height: 202,
  //     mass: 136,
  //     eye_color: 'yellow',
  //     gender: 'female',
  //   },
  //   {
  //     name: 'leia',
  //     height: 150,
  //     mass: 49,
  //     eye_color: 'brown',
  //     gender: 'female',
  //   },
  //   {
  //     name: 'Anakin Skywalker',
  //     height: 188,
  //     mass: 84,
  //     eye_color: 'blue',
  //     gender: 'male',
  //   },
  // ];
  arr2: FindPerson[] = [
    {
      id: 1,
      name: 'Juled',
      occupation: 'Junior Programer'
    },
    {
      id: 2,
      name: 'Kasim',
      occupation: 'Doctor'
    },
    {
      id: 3,
      name: 'Leotrim',
      occupation: 'Hair Dresser'
    }

  ]

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
  genders: Gender[] = [
    {
      id: 1,
      name: 'Male',

    },
    {
      id: 2,
      name: 'Female',

    }
  ]

  // eyes: Eyes[] = [
  //   {
  //     id: 1,
  //     name: 'Yellow'
  //   },
  //   {
  //     id: 2,
  //     name: 'Red'
  //   }
  // ]

  rezultati?: string = '';

  selectedPerson!: Person;
  findPeople!: FindPerson;
  constructor() { }

  ngOnInit() {

    // Find kerkon ne array ne baze te nje kushti
    // const rez = this.arr1.find(x => {
    //   return x.id === 3
    // })
    // console.log(rez);
    // this.rezultati = rez?.name
    // console.log(this.rezultati);






    // let f = this.arr1.find(x => x === 3);
    // let n = this.arr1.find(x => x.id === 3)
    // console.log(n);
    // this.arr1.forEach(x => {


    //   let g = this.genders.find(z => z.id === x.genderId)
    //   console.log(g);

    //   x.genderName = g?.name

    // })
    // let f = this.arr1.find(x => x.id === 2)
    // console.log(f);

    // this.arr1.forEach(x => {

    //   let f = this.eyes.find(z => z.id === x.eyesId)

    //   x.eyesName = f?.name
    // })
    // console.log(this.arr1);

  }

  selectPerson(id: number) {

    // this.selectedPerson = this.arr1.find(x => x.id === id)!

    // console.log(this.selectedPerson);
  }


  isDoctor() {
    this.findPeople = this.arr2.find(x => x.id === 2)!

    console.log(this.findPeople);
  }



}
