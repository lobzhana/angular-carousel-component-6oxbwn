import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CarouselComponent, CarouselItemElement } from './carousel.component';
import { CarouselItemDirective } from './carousel-item.directive';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, CarouselComponent, CarouselItemDirective, CarouselItemElement ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 