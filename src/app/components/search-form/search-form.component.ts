import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  name: string = '';
  city: string = '';
  grade: number | null = null;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.router.navigate(['/search'], {
      queryParams: {
        name: this.name,
        city: this.city,
        grade: this.grade
      }
    })
  }
}
