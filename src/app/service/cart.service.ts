import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new BehaviorSubject<number>(0);
  cartItems$ = this.cartItems.asObservable();

  testItems: number = 0;
  constructor() { }

  addToCart() {
    this.cartItems.next(this.cartItems.value + 1);
  }


}
