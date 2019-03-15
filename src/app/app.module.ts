import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
//importar componentes de material 
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';


import { ModalModule } from 'ngx-bootstrap/modal';

import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
//importar componentes

import { Ng5SliderModule } from 'ng5-slider';
import { FilterPipeModule } from 'ngx-filter-pipe';
//service 
import {CarService} from './_servicios/car.service';
import { CarComponent } from './car/car.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,MatButtonModule,MatIconModule,MatSlideToggleModule,MatBadgeModule, MatFormFieldModule,
    Ng5SliderModule,
    FilterPipeModule,
    ModalModule.forRoot()
    
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
