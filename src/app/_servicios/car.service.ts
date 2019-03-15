import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class CarService {
  car: [];

  constructor() {


  }


getCar(){
  return JSON.parse(localStorage.getItem('car'));
}

  add(product: any) {

    let existing: any = localStorage.getItem('car');
    console.log(existing);
    if (existing == null) { // creamos el carro si no existe
      let init = [];
      product.cantidad = 1;
      let newcar = init.concat(product)
      localStorage.setItem('car', JSON.stringify(newcar));
    } else {
      // validamos que en el carro no exista el producto
      const id = this.validar(JSON.parse(localStorage.getItem('car')));

      if (!id.includes(product.id)) {
        const car = JSON.parse(localStorage.getItem('car'));
        product.cantidad = 1;
        let carJson = car.concat(product)
        localStorage.setItem('car', JSON.stringify(carJson));
      } else {

      }
    }




  }


  delete(product: any) {
    const car = JSON.parse(localStorage.getItem('car'));
    for (let i = 0; i < car.length; i++) {
      if (car[i].id == product.id) {
        car.splice(i);
      }
    }
    localStorage.setItem('car', JSON.stringify(car));
  }


  updateCantidad(product: any, cantidad: number) {
    const car = JSON.parse(localStorage.getItem('car'));
    for (let i = 0; i < car.length; i++) {
      if (car[i].id == product.id) {
        car[i].cantidad = cantidad;
      }
    }
    localStorage.setItem('car', JSON.stringify(car));
  }


  clear(){
    localStorage.removeItem('car');

  }


  private validar(array: any) {
    let id = [];
    for (let i = 0; i < array.length; i++) {
      id.push(array[i].id)
    }
    return id;
  }


}
