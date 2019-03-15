import { Component, OnInit } from '@angular/core';
import {CarService} from '../_servicios/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  model:any;
car=[];

  constructor(private carService: CarService ) { 
   
  }

 
  ngOnInit() {
    this.car=this.carService.getCar();

  }
  addCar(product:{}){
      
    this.carService.add(product)
    this.car=this.carService.getCar();
      }


      updateCantidad($event , product:any  ){
this.carService.updateCantidad(product , $event)
this.car=this.carService.getCar();
      }



      deleteProduct(product:{}){
        this.carService.delete(product)
        this.car=this.carService.getCar();
      }
      Pagar(){
        this.carService.clear();
        this.car=[];
      }

}
