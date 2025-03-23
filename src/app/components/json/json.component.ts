import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent implements OnInit {

  tani = new Date();

  cani: any;


  object1 = {
    id: 1,
    name: 'Cani',
    array: [1, 2, 3, {
      surname: 'Kaloshi'
    }],
    isProgramer: true,
    testObject: {
      size: 27
    }
  }

  constructor() { }

  ngOnInit() {
    // const obj2 = JSON.stringify(this.object1);
    // localStorage.setItem('test', obj2);

    // let obj5 = {
    //   name: 'Juled',
    //   age: 24
    // }

    // const obj6 = JSON.stringify(obj5)
    // localStorage.setItem('celsi', obj6)


    // const take = localStorage.getItem('celsi');
    // let save = JSON.parse(take!)
    // console.log(save);
    /////////////////////////////
    // let obj4 = {
    //   id: 1,
    //   age: 23
    // }
    // const obj8 = JSON.stringify(obj4);
    // localStorage.setItem('testi', obj8);


    // const save = localStorage.getItem('gama')!;
    // let savee = JSON.parse(save)


    // let saveee = savee.name

    // this.cani = saveee;

    // console.log(saveee);

    this.func1();
    let test = this.func2();
  }
  func1() {

  }

  func2() {

    return 5
  }



  setValue() {

    const object2 = JSON.stringify(this.object1);

    localStorage.setItem('test', object2)

  }


  getValue() {

    const take = localStorage.getItem('test');
    let take1 = JSON.parse(take!);

    this.cani = take1.name
    console.log(take1);

  }


}
