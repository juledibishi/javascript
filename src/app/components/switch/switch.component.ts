import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  num: number = 10;
  str: string = 'Juled'
  constructor() { }




  ngOnInit(): void {

    // switch (this.str) {
    //   case 'Juled':
    //     console.log('hello cani');
    //     break;

    //   case 'Cani':
    //     console.log('hello world');
    //     break;


    // }


    switch (this.num) {
      case 1:
        console.log('hello');
        break;

      case 2:
        console.log('go');
        break

      default:
        console.log('asnjera');

        break;
    }

  }

}
