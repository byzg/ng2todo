import { Component } from '@angular/core';

export interface ITodo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: ITodo[] = [
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
}
