import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

export interface ITodoItem {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: ITodoItem;
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.item.completed = !this.item.completed
  }

  onDelete() {
    this.delete.emit(this.item)
  }
}
