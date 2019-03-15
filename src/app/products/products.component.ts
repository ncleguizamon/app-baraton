import { Component, OnInit } from '@angular/core';
import   Products from '../../assets/data/products.json';
import { Options } from 'ng5-slider';
import {CarService} from '../_servicios/car.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  userFilter: any = { name: '' };
  value: number = 0;

  highValue: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    translate: (value: number): string => {
      this.ngOnInit();
      return '$' + value;
    }
  };
  products:any;


  productsOR = false;
  disabled = false;

  constructor( private carService: CarService) { }

  ngOnInit() {
console.log(this.carService.get())

this.setProducts();
  
  }
  


setProducts(){
  console.log(Products);

  
  
  this.products =Products.products.filter(p => {
  return ( this.updateNumber(p.price) >= this.value  && this.updateNumber(p.price)  <= this.highValue)
    })

   if(this.productsOR === false) {

    this.products =this.products.sort((a, b) => this.updateNumber(a.price) - this.updateNumber(b.price) );

   }else{
    this.products =this.products.sort((a, b) => this.updateNumber(b.price) - this.updateNumber(a.price) );

   }

 // this.products =this.products.filter(filterP => filterP.available = true)
 
}


updateorden(){
  this.productsOR =!this.productsOR;
  this.setProducts();

}


updateNumber(numero:any){
  let p1= numero.replace("$","")
  return p1.replace(",",".")
}


}
