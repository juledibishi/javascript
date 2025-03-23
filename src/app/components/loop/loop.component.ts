import { Component, OnInit, ViewChild } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { CartService } from 'src/app/service/cart.service';
import { LoggerService } from 'src/app/service/logger.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.scss']
})
export class LoopComponent implements OnInit {
  rez!: number;
  name: string = '';
  age!: number;
  condition: boolean = true;
  cartItems!: number;
  form!: FormGroup;
  safeHtml!: SafeHtml;
  constructor(private cartService: CartService, private logger: LoggerService, private fb: FormBuilder, private sanitizer: DomSanitizer) {
    const dangerousHtml = '<script>alert("XSS Attack!")</script>';
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(dangerousHtml);
    console.log(this.safeHtml);


    this.cartService.cartItems$.subscribe(count => {

      this.cartItems = count
      console.log(this.cartItems);

    });
  }
  selectedNode$ = this.logger.getSelectedNodeId();


  ngOnInit(): void {

    this.form = this.fb.group({
      name: ['', Validators.required],
    });
    // for (let i = 0; i <= 10; i++) {
    //   console.log(i);
    // }

    // let obj = {
    //   name: 'Juled',
    //   age: 25
    // }
    // let hasName = obj.hasOwnProperty('name');
    // console.log(hasName);
    let a = 2;
    if (a > 1) {
      console.log('a is greater than 1');
    } else {
      console.log('a is not greater than 1');
    }

    let x = 10;
    let z = 20;

    if (x === 11 || z === 20) {
      console.log('x is 10 and z is 20');
    } else {
      console.log('the condition is not correct');
    }
  }

  selectNode(nodeId: string) {
    this.logger.setSelectNodeId(nodeId);
  }

  onSubmit() {
    console.log(this.form.value);
  }
  logMessage() {
    this.logger.log('Hello Juled')
  }

  addItem() {
    this.cartService.addToCart();
  }

  math(num1: number, num2: number) {
    let rez = num1 + num2
    console.log(rez);
    localStorage.setItem('keeey', num2.toString())

  }


}
