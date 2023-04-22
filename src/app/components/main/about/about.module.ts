import { SharedService } from '../../../shared/shared.service';
import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
  ],
  providers: [SharedService],
})
export class AboutModule { }
