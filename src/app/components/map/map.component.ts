import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  arr = [1, 2, 3, 4, 5]

  arrStr = ['1', '2', '3'];

  ngOnInit(): void {
    // map eshte funksion qe perdoret vetem per array dhe transformon te dhenat dhe si rezultat kthen te dhenat e transformuara

    const test = this.arrStr.map(x => {
      return Number(x)
    });

    // const rez = this.arr.map(x => {
    //   if (x === 2) {
    //     x = x * 2
    //   }
    //   return x
    // })

    // console.log(rez);
    // console.log(test);

    const source = of(1, 2, 3, 4, 5);

    const doubled = source.pipe(map(x => x * 2));

    doubled.subscribe(x => console.log(x));
  }


}
