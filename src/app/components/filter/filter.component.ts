import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Person } from 'src/app/models/model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  form = new FormGroup({
    enable: new FormControl(''),
    disable: new FormControl(''),
    search: new FormControl({ value: '', disabled: true }) // Initially disabled
  });


  arr: Person[] = [
    {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      eye_color: 'blue',
      gender: 'male',
    },
    {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      eye_color: 'yellow',
      gender: 'female',
    },
    {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      eye_color: 'brown',
      gender: 'female',
    },
    {
      name: 'Anakin Skywalker',
      height: 188,
      mass: 84,
      eye_color: 'blue',
      gender: 'male',
    },
  ];

  allArr: Person[] = []

  filterPerson: Person[] = [];




  constructor() {

  }

  ngOnInit(): void {
    if (this.form.value.enable === true) {
    }
    // filter kerkon apo filtron ne baze te nje kushti dhe si rezultat kthen te njejtin array me te dhenat tashme te filtruara.

    // const filteredItems.forEach(x => {

    //   x.name = 'Beqir'
    //   console.log(filteredItems);

    // })
    // this.allArr = this.arr
    // const greater = this.arr.filter(x => {

    //   return x.mass >= 100

    // })
    // console.log(greater);
    // const shorter = this.arr.filter(x => {
    //   return x.height < 200
    // })
    // console.log(shorter);

    // const male = this.arr.filter(x => {
    //   return x.gender === 'male'
    // })
    // console.log(male);
    // const female = this.arr.filter(x => {
    //   return x.gender === 'female'
    // })
    // console.log(female);

  }


  // clickFilter() {
  //   const a = this.arr.filter(x => {
  //     return x.age >= 14
  //   })

  //   const b = this.arr.find(x => {
  //     return x.age === 23;
  //   })

  //   console.log(a);
  //   console.log(b);

  // }



  filterData() {

    this.arr = this.allArr.filter(x => {

      // ne vend te number mund edhe me x ta konvertojm ne number 
      return x.age === Number(this.form.get('age')?.value)
      return x.name === (this.form.get('name')?.value)

      return x.name.toLowerCase().includes(this.form.get('name')?.value.toLowerCase());


    });
    console.log(this.form.get('name')?.value);

  }
}



