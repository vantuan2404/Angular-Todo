import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataInputComponent } from './data-input/data-input.component';
import { DataListComponent } from './data-list/data-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    DataInputComponent ,
    DataListComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
