import { Component, OnInit, Input } from '@angular/core';

import { ITodo } from '../app.component';

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

  toggleItem(item: ITodo) {
    item.completed = !item.completed;
  }
}
