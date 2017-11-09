import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Item } from '../../resources/models/item';

@Component({
  selector: 'app-todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: Item;
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.item);
  }
}
