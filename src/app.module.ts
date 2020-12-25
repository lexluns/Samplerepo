import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/Rootfolder/app.component';
import { Bestcomp1Component } from './app/bestcomp1/bestcomp1.component';
import { Bestcomp2Component } from './app/bestcomp2/bestcomp2.component';


@NgModule({
  declarations: [
    AppComponent,
    Bestcomp1Component,
    Bestcomp2Component
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
