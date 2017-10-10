import { Injectable } from '@angular/core';

import { Item } from '../models/item';

const fakeIndexData = [
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
export class Items extends Array<Item> {
  constructor() {
    super();
    Object.setPrototypeOf(this, Items.prototype);
  }

  index(): Promise<any> {
    return new Promise(resolve => {
      fakeIndexData.map(itemData => this.push(new Item(itemData)));
      resolve();
    });
  }

  delete(item: Item) {
    this.splice(this.indexOf(item), 1);
  }
}
