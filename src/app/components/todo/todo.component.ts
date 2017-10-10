import { Component, OnInit } from '@angular/core';

import { Items } from '../../resources/collections/items';
import { Item } from '../../resources/models/item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(public items: Items) { }

  ngOnInit() {
    this.items.index();
  }
}
