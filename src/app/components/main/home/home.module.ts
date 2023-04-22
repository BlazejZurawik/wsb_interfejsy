import { SharedService } from './../../../shared/shared.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumComponent } from './album/album.component';
import { CardComponent } from './card/card.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home.component';
import { NameComponent } from './name/name.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    NameComponent,
    CardComponent,
    AlbumComponent,
    GroupComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [SharedService],
})
export class HomeModule { }
