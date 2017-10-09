import { Injectable } from '@angular/core';

import { Item } from '../models/item';

const stubIndexData = [
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

@Injectable()
export class Items<Item> extends Array<Item> {
  constructor() {
    super();
    Object.setPrototypeOf(this, Items.prototype);
  }

  index(): Promise<any> {
    return new Promise(resolve => {
      stubIndexData.map(itemData => this.push(new Item(itemData)));
      resolve();
    });
  }
}
