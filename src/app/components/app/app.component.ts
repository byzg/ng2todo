import { Component } from '@angular/core';

import { ITodoItem } from "../todo-item/todo-item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: ITodoItem[] = [

  ];
}
