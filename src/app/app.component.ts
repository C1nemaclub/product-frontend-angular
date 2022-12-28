import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  information = 'New World';

  handleClick() {
    console.log('Hello from App');
  }
}
