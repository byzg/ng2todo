import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdToolbarModule, MdListModule, MdCheckboxModule, MdIconModule, MdButtonModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { TodoComponent } from '../todo/todo.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

import { Items } from '../../resources/collections/items';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdListModule,
    MdCheckboxModule,
    MdButtonModule,
    MdIconModule
  ],
  providers: [Items],
  bootstrap: [AppComponent]
})
export class AppModule { }
