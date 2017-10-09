export class Item {
  text: string;
  completed: boolean;

  toggle(): void {
    this.completed = !this.completed;
  }
}
