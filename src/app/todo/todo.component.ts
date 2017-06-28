import { Component, OnInit, Input } from '@angular/core';

import { ITodoItem } from "./todo-item/todo-item.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() items;
  constructor() { }

  ngOnInit() {
  }

  delete(item: ITodoItem) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}
