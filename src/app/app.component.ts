import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  count = 1;
  decreaseCount=() => {
    console.log("Button Clicked")
    this.count--;
  }
  increaseCount=() => {
    console.log("Button Clicked")
    this.count++;
  }
}
