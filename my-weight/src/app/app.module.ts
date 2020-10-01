import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AngularFontAwesomeModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
