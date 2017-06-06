import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  items: string[] = [
    'To drink',
    'To eat',
    'To sleep'
  ];

  constructor() { }

  ngOnInit() {
  }

}
