import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-include',
  templateUrl: './include.component.html',
  styleUrls: ['./include.component.scss']
})
export class IncludeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // includes eshte funksion qe kontrollon se a ekzoston vlera e caktuart apo jo, si rezultat na kthen boolean vler.
    // includes perdoret per array dhe string
    // const name = 'Juled';
    // const test = name.includes('ed')
    // const arr = [1, 2, 3, 4, 5, 'Cani'];
    // const a = arr.includes('Cani')
    // console.log(a);
  }



}
