import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.scss']
})
export class SplitComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // split eshte funksion qe perdoret vetem per variabla string dhe si rezultat kthen array varsisht vleres se dhene



    const name = 'Prodhimtari,Nderimari';
    const test = 'Prodhimtari,Nderimari,1';

    const rez = name.split(',');
    const rez1 = test.split(',');

    rez1.find(x => {
      console.log(x);

    })
    console.log(rez);
    console.log(rez1);

  }

}
