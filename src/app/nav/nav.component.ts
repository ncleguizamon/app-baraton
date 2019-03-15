import { Component, OnInit, ViewChild } from '@angular/core';

import   categories from '../../assets/data/categories.json';
import {CarComponent} from '../car/car.component';

import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild(ModalDirective) staticModal: ModalDirective;

  
  @ViewChild(CarComponent) Car: CarComponent;


  categorias:any
  constructor() { }

  ngOnInit() {

this.categorias =categories.categories



  }

  getCart(){
    this.Car.ngOnInit()
    this.staticModal.show()

  }



}
