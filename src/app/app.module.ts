import { HomeModule } from './components/main/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared/shared.service';
import { MainModule } from './components/main/main.module';
import { LoginModule } from './components/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    LoginModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
