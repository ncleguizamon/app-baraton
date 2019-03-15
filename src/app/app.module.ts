import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//importar componentes de material 
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
//importar componentes

import { Ng5SliderModule } from 'ng5-slider';
import { FilterPipeModule } from 'ngx-filter-pipe';
//service 
import {CarService} from './_servicios/car.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,MatButtonModule,MatIconModule,MatSlideToggleModule,
    Ng5SliderModule,
    FilterPipeModule
    
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
