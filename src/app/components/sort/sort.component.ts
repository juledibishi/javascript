import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  arr: string[] = ['Hasan', 'Luli', 'Buli', 'Kuli', 'Zuli']
  arrNumber: number[] = [3, 5, 1, 7, 4]

  constructor() { }

  ngOnInit(): void {
    const rez1 = this.arr.sort()
    console.log(rez1);

    const rez = this.arr.sort()
    rez.reverse()
    console.log(rez);

    const rezNumber = this.arrNumber.sort((a, b) => {
      return b - a

    })
    console.log(rezNumber);

  }

}
