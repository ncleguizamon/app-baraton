import { Injectable } from '@angular/core';

import { NgxIndexedDB } from 'ngx-indexed-db';


@Injectable({
  providedIn: 'root'
})


export class CarService {

db: any = new NgxIndexedDB('Cart', 1);

  constructor() {
   

  }




  get() {
    const rta=false;
    const db = new NgxIndexedDB('Cart', 1);
  db.openDatabase(1, evt => {
      let objectStore = evt.currentTarget.result.createObjectStore('people', { keyPath: 'id', autoIncrement: true });

      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('email', 'email', { unique: true });
    }).then(function() {
      db.getByKey('people', 1).then((person) => {
      this.rta = person;
      }, (error) => {
      console.log(error);
      });
      });
      return rta;
    }
}
