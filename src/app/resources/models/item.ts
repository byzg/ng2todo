export class Item {
  text: string;
  completed: boolean;
  constructor(params: Object) {
    Object.assign(this, params);
  }

  toggle(): void {
    this.completed = !this.completed;
  }
}
