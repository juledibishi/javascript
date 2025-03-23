import { Component, HostListener, OnInit } from '@angular/core';
import { PersonalInformation } from 'src/app/models/personal-information';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  name: string = 'Juledd'
  year: number = 10;

  file: any = [{
    name: 'logo.svg',
    size: 2120109,
    type: 'image/svg'
  }]
  whatDate: string | undefined;
  text: string | undefined;

  myName: string = 'Leti';

  personalInformation: PersonalInformation = {
    name: 'Juled',
    age: '25',
    city: 'Tetovo'
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('U shtyp butoni Enter!');

    }
  }


  ngOnInit(): void {
    this.whatDate = new Date().toDateString();
    this.text = 'Hello Juled'
  }

  getAge(age: number) {
    console.log(age);
  }
  getWeight(weight: number) {
    console.log(weight);

  }


}
