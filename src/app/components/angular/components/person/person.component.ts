import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() name: string = '';

  @Input() surname: string = '';

  @Input() agePerson: number = 0;

  @Input() height: number = 0;

  @Output() age = new EventEmitter<number>();

  @Output() weight = new EventEmitter<number>();

  @Output() hidde = new EventEmitter<boolean>();
  hidden: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.age.emit(55)
    this.weight.emit(77)

  }


}
