import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule } from '@clr/angular';

import '@clr/icons';

import { AppComponent } from './app.component';

import '@cds/core/alert/register.js';
import { CdsModule } from '@cds/angular';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ClarityModule, BrowserAnimationsModule, CdsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
