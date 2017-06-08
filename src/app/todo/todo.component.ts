import { Component, OnInit } from '@angular/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  items: Todo[] = [
    {
      text: 'To drink',
      completed: false
    },
    {
      text: 'To eat',
      completed: true
    },
    {
      text: 'To sleep',
      completed: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleItem(item: Todo) {
    item.completed = !item.completed;
  }
}
