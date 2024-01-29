import { Component } from '@angular/core';

@Component({
  selector: 'app-server', //angular element
  // selector: '[app-server∂]', // attribute way
  // selector: '.app-server', // css class way
  templateUrl: './app-server.component.html',
  styleUrls: ['./app-server.component.scss']
})
export class AppServerComponent {
  public username: string;

  public constructor() {
    this.username = "";
  }

  public resetUsername(): void {
    this.username = "";
  }
}
