import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {


  arr: number[] = [1, 2, 4, 5, 6]

  constructor() { }

  ngOnInit(): void {
    // join eshte funksion qe bashkon elementet a nje array ne nje string varsisht me cfar karakteri

    const rez = this.arr.join(',')

    console.log(this.arr);

    console.log(rez);

  }

}
