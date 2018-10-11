import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter = 0;
  public title = 'app';
  public text = 'password';
  public photo = "https://www.catster.com/wp-content/uploads/2017/08/A-brown-cat-licking-its-lips.jpg"
  account = {
    name: 'dan'
  };

  public gerRandom(): number {
    return 1121;
  }

  public changeColor(event: Event): void {
    console.log(event);

  }

  public sort() {
    console.log('sort');

  }

  public inputColor(event: Event): void {
    console.log((event.target as any).value);

  }

  public increase() {
    this.counter = this.counter + 1;
  }

  public decrease() {
    if (this.counter < 0) {
      return;
    }
    this.counter = this.counter - 1;
  }

  public chnageCounet(value: number) {
    this.counter = value;
  }
}
