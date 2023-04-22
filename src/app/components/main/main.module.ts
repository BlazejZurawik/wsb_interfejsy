import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HomeModule,
    AboutModule,
  ]
})
export class MainModule { }
