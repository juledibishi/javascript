import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  students = [
    { id: 1, name: 'Arta', city: 'Prishtina', grade: 9 },
    { id: 2, name: 'Amar', city: 'Prishtina', grade: 7 },
    { id: 3, name: 'Erion', city: 'Tirana', grade: 8 },
    { id: 4, name: 'Besnik', city: 'Tetovë', grade: 9 },
    { id: 5, name: 'Lira', city: 'Shkup', grade: 10 }
  ];

  filteredStudent: any[] = []
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(query => {
      const name = query['name'];
      const city = query['city'];
      const grade = query['grade'] ? Number(query['grade']) : null;


      this.filteredStudent = this.students.filter(student => {
        const nameMatch = !name || student.name.toLowerCase() === name.toLowerCase();
        const cityMatch = !city || student.city.toLowerCase() === city.toLowerCase();
        const gradeMatch = grade === null || student.grade === grade;

        return nameMatch && cityMatch && gradeMatch;
      });
    })

  }

}
