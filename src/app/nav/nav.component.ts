import { Component, OnInit } from '@angular/core';

import   categories from '../../assets/data/categories.json';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categorias:any
  constructor() { }

  ngOnInit() {
console.log(categories);
this.categorias =categories.categories

  }

}
