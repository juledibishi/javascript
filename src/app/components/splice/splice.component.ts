import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splice',
  templateUrl: './splice.component.html',
  styleUrls: ['./splice.component.scss']
})
export class SpliceComponent implements OnInit {
  arr: number[] = [2, 4, 6, 8, 10, 11, 12, 54, 68, 78]
  constructor() { }

  ngOnInit(): void {
    //fshine elemt prej arrayt me index (pozicion) te caktuar
    const rez = this.arr.splice(1, 1);
    // console.log(this.arr);

    // console.log(rez);


  }

  // deleteNumber(index: number) {
  //   this.arr.splice(index, 1)

  // }
  deleteNumber2(element: number) {
    const index = this.arr.findIndex(x => x === element)

    this.arr.splice(index, 1)

    console.log(index);

  }


}
