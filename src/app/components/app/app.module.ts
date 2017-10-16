import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatListModule, MatCheckboxModule, MatIconModule, MatButtonModule, MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { TodoComponent } from '../todo/todo.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

import { Items } from '../../resources/collections/items';
import { TodoItemFormComponent } from '../todo-item-form/todo-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    TodoItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [Items],
  bootstrap: [AppComponent]
})
export class AppModule { }
