import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {


  products = [
    {
      "id": 1,
      "name": "Product 1",
      "category": "Category A",
      "description": "Description of product 1",
      "price": 9.99
    },
    {
      "id": 2,
      "name": "Product 2",
      "category": "Category B",
      "description": "Description of product 2",
      "price": 19.99
    },
    {
      "id": 3,
      "name": "Product 3",
      "category": "Category A",
      "description": "Description of product 3",
      "price": 29.99
    },
    {
      "id": 4,
      "name": "Product 4",
      "category": "Category C",
      "description": "Description of product 4",
      "price": 39.99
    },
    {
      "id": 5,
      "name": "Product 8",
      "category": "Category B",
      "description": "Description of product 5",
      "price": 49.99
    },
    {
      "id": 6,
      "name": "Product 6",
      "category": "Category A",
      "description": "Description of product 6",
      "price": 59.99
    },
    {
      "id": 7,
      "name": "Product 7",
      "category": "Category C",
      "description": "Description of product 7",
      "price": 69.99
    },
    {
      "id": 8,
      "name": "Product 8",
      "category": "Category B",
      "description": "Description of product 8",
      "price": 79.99
    },
    {
      "id": 9,
      "name": "Product 9",
      "category": "Category A",
      "description": "Description of product 9",
      "price": 89.99
    },
    {
      "id": 12,
      "name": "Product 10",
      "category": "Category C",
      "description": "Description of product 10",
      "price": 99.99
    }
  ]

  arr = [1, { name: 'Juled', age: 25 }];

  employess: any[] =
    [
      { name: 'Hasan', age: 37 },
      { name: 'Besim', age: 35 }
    ];

  students: any[] =
    [
      { name: 'Leti', major: 'Programer' },
      { name: 'Cani', major: 'Programer' },
      { name: 'Teti', major: 'Driver' }
    ]

  cars: any[] =
    [
      { model: 'Ferari', price: 'cheap' },
      { model: 'Golf', price: 'expensive' },
    ]

  emptyArray: any = [];
  filteredStudents: any[] = []
  searchText: string = '';
  filterCategory: any = [];


  data = [{
    name: 'Mateusz',
    age: 14,
  },
  {
    name: 'Tomek',
    age: 15,
  },
  {
    name: 'Jan',
    age: 12,
  },
  ];

  selectedOptions = {
    age: [{
      value: 14,
      label: '14'
    },
    {
      value: 12,
      label: '12'
    },
    ],
    names: [{
      value: 'Mateusz',
      label: 'Mateusz'
    }],
  };

  name: string = '';
  category: string = '';

  @ViewChild('paragraph') paragraph!: ElementRef
  constructor(private route: ActivatedRoute, private router: Router) {

  }
  onSearch() {
    this.router.navigate(['/object'], {
      queryParams: {
        name: this.name,
        category: this.category
      }
    })
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'],
        this.category = params['category']
    });


    this.filteredStudents = this.students;

    const person = {
      name: 'Juled',
      contact: {
        email: 'juled@example.com'
      }
    };

    const email = person.contact.email;

    console.log(email);
    // //concat()– Kthen një array të ri duke bashkuar dy ose më shumë array.
    // const resConcat = this.arr.concat(this.cars)
    // console.log(resConcat);

    // //filter() – Krijon një array të ri me elementet që plotësojnë një kusht.
    // const newData = this.data.filter((el) => {
    //   return this.selectedOptions.age.some((element) => element.value === el.age) &&
    //     this.selectedOptions.names.some((element) => element.value === el.name)
    // })
    // console.log(newData);

    // const objOrArray = newData.length > 1 ? newData : newData[0];
    // console.log(objOrArray);
    // let obj;
    // if (newData.length > 1) {
    //   obj = newData;
    // } else {
    //   obj = newData[0]
    // }
    // console.log(obj);



    // const rezFilter = this.products.filter(p => p.category === 'Category B');
    // console.log(rezFilter);

    // const rezFilter1 = this.arr.filter(a => typeof a === 'object');
    // console.log(rezFilter1);
    // const rezFilter2 = this.arr.filter(a => typeof a === 'object' && a.name === 'Juled');
    // console.log(rezFilter2);
    // const rezFilter3 = this.arr.filter(a => typeof a === 'object' && a.age > 20);
    // console.log(rezFilter3);
    // const rezFilter4 = this.arr.filter(a => typeof a === 'number')
    // console.log(rezFilter4);

    // const rezFilter5 = this.students.filter(s => s.major === 'Programer')
    // console.log(rezFilter5);

    // //find() Kthen elementin e parë që plotëson kushtin ose undefined nëse nuk gjendet.
    // const rezFind1 = this.products.find(p => p.price === 99.99);
    // console.log(rezFind1);
    // const rezFind2 = this.data.find(d => d.age > 14);
    // console.log(rezFind2);
    // const rezFind3 = this.products.find(p => p.id === 3);
    // if (rezFind3) {
    //   rezFind3.name = 'LetiProduct'
    // }
    // console.log(rezFind3);



    // //findIndex() Kthen indeksin e elementit të parë që përputhet me kushtin ose -1 nëse nuk gjendet.
    // const rezFindIndex = this.data.findIndex(d => d.age > 14)
    // console.log(rezFindIndex);


    // //map() Krijon një array të ri duke transformuar secilin element
    // const rezMap = this.products.map(p =>
    //   p.id === 2 ? { ...p, name: 'test1' } : p
    // );
    // console.log(rezMap);
    // const rezMap1 = this.products.map(p => {
    //   if (p.id === 3) {
    //     return { ...p, name: 'Letii' };
    //   } else {
    //     return p;
    //   }
    // });
    // console.log(rezMap1);

    // //every() Kthen true nëse të gjithë elementet e array përmbushin kushtin, ndryshe false
    // const rezEvery = this.data.every(d => d.age > 11)
    // console.log(rezEvery);

    // //some() Kthen true nëse të paktën një element përmbush kushtin
    // const rezSome = this.data.some(d => d.age > 13)
    // console.log(rezSome);

    // //includes() Kontrollon nëse një vlerë ndodhet në array dhe kthen true ose false
    // const rezIncludes = this.cars.map(c => c.model);
    // const exists = rezIncludes.includes('Ferari')
    // console.log(exists);



    // //join() Kthen një string duke bashkuar elementet e array me një ndarës të caktuar.
    // const rezJoin = this.cars.map(c => c.model).join(' | ');
    // console.log(rezJoin);

    // //slice() Kthen një pjesë të array pa e ndryshuar atë
    // const rezSlice = this.students.slice(0, 2)
    // console.log(rezSlice);


    // //splice() Ndryshon përmbajtjen e array duke shtuar, fshirë ose zëvendësuar elemente.
    // // const rezSplice = this.students.splice(1, 1);
    // // console.log(rezSplice);



    // this.arr.forEach((x, index, tes) => { })
  }



  filterStudents() {

    this.filteredStudents = this.students.filter(s => {
      return s.name.toLowerCase().includes(this.searchText.toLowerCase());
    })

  }

  clickHereForSet() {
    const members = new Set(["Juled", "Hasan", "Amar"])
    const numers = new Set(["JS", "TS", "Python"]);
    const set = new Set();
    set.add('x')
    set.add('y')
    if (!set.has('z')) {
      set.add('z')
    }
    console.log(set);

    const numbers = new Set();

    for (let i = 1; i <= 6; i++) {
      numbers.add(i);
    }

    console.log([...numbers]);

    for (const n of numers) {
      console.log(n.toLowerCase());

    }
    if (members.has("Juled")) {
      console.log('po eshte juledi');
      console.log(members.size);
      members.delete("Hasan")
      console.log(members);
    }
    const testMix = new Set();
    testMix.add({ name: "Saqip", age: 24, gender: "male" })
    console.log(testMix);


  }

  clickHereForMap() {
    const map = new Map();

    map.set("name", 27);
    map.set("age", 26);

    console.log(map.get("name"));

    console.log(map.has("age"));
    console.log(map);

    console.log(map.size);
    // const set = new Set(["apple", "banana", "apple"]);
    // console.log(set); // Set { 'apple', 'banana' }

    // const map = new Map();
    // map.set("apple", 1);
    // map.set("banana", 2);
    // console.log(map); // Map { 'apple' => 1, 'banana' => 2 }


  }

  changeText() {
    this.paragraph.nativeElement.textContent = 'Text changed'
  }
}


