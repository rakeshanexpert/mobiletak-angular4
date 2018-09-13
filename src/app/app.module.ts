import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; //form module
import { HttpModule } from '@angular/http'; //includer for services

import { AppComponent } from './app.component';
import { routingComponents } from './app.routing-model'; //export routing module for saperate link path
import { Approutingmodel } from './app.routing-model';

import { ServiceService } from './service.service';






@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
   
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    Approutingmodel,
    
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
