import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CountComponent } from './count/count.component';
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form/form.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CountComponent, ButtonComponent, FormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
