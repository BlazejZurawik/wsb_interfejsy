import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './components/name/name.component';
import { AlbumComponent } from './components/album/album.component';
import { GroupComponent } from './components/group/group.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    AlbumComponent,
    GroupComponent,
    HelloWorldComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
