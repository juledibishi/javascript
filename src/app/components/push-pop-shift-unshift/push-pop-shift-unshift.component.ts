import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-pop-shift-unshift',
  templateUrl: './push-pop-shift-unshift.component.html',
  styleUrls: ['./push-pop-shift-unshift.component.scss']
})
export class PushPopShiftUnshiftComponent implements OnInit {
  arr: any = [
    1, 'Juled', 'Cani', true
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onPush() {
    let obj = {
      name: 'juled'
    }
    this.arr.push(obj)

    console.log(this.arr);

  }
  onPop() {

    this.arr.pop()
    console.log(this.arr);

  }

  onShift() {

    this.arr.shift()
    console.log(this.arr);

  }

  onUnshift() {

    this.arr.unshift('Selam Aleykim')
    console.log(this.arr);

  }

}
