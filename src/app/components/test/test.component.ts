import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { Article } from 'src/app/models/model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(0),
    quantity: new FormControl(1),
    total: new FormControl(0),

  })

  totalAmount: number = 0;

  article: Article[] = [
    {
      id: 1,
      name: 'Margarita',
      price: 150,
      quantity: 1
    }, {
      id: 2,
      name: 'Capricoza',
      price: 170,
      quantity: 1
    },
    {
      id: 3,
      name: 'Quatro Formaci',
      price: 200,
      quantity: 1
    }, {
      id: 4,
      name: 'Coca Cola',
      price: 70,
      quantity: 1
    }
  ]
  selectArticle: Article[] = []
  articles!: Article;

  show = false;
  constructor() { }

  ngOnInit(): void {
  }

  selectArticl(item: Article) {
    this.form.patchValue({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    })
    this.calculate()
  }
  add() {
    let obj: Article = {
      id: this.form.value.id,
      name: this.form.value.name,
      price: this.form.value.price,
      quantity: this.form.value.quantity,
      sum: this.form.value.total
    }
    this.selectArticle.push(obj);
    this.clearInput()
    this.calculateTotalAmount()
    this.calculate()

  }
  clearInput() {
    this.form.reset()
  }

  calculate() {

    this.form.patchValue({
      total: this.form.value.price * this.form.value.quantity
    });

    this.selectArticle.forEach(x => {
      x.sum = x.price * x.quantity
    });


  }

  calculateTotalAmount() {
    console.log(JSON.parse(JSON.stringify(this.selectArticle)));

    this.totalAmount = this.selectArticle.reduce((a, b) => a + b.sum!, 0);

  }

  deleteArticle(index: number) {
    this.selectArticle.splice(index, 1)

  }

  order() {
    // if (this.form.value.totalAmount === 1)
    //   this.show === true
    // alert('Articles successfully ordered')
  }
}
