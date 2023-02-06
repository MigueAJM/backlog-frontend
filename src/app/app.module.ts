import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CountComponent } from './count/count.component';
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form/form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ChildrenComponent } from './children/children.component';

import { ListMessagesComponent } from './list-messages/list-messages.component';
import { AddMessagesComponent } from './add-messages/add-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    ButtonComponent,
    FormComponent,
    ReactiveFormComponent,
    ChildrenComponent,
    ListMessagesComponent,
    AddMessagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
