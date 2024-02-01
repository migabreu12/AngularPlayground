import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server', //angular element
  // selector: '[app-server∂]', // attribute way
  // selector: '.app-server', // css class way
  templateUrl: './app-server.component.html',
  styleUrls: ['./app-server.component.scss']
})
export class AppServerComponent {
  // you can add an alias to input components
  // Property binding will work but it will not bind to someObject,
  // it will have to be bound to aliasSample
  // So the property binding on the html side will have to look like
  // [aliasSample]="'someText'" rather than [someObject]="'someText'"
  @Input('aliasSample') public someObject: string = "";
  public username: string = "";
  public paragraphDisplay = false;
  public displayButtonClicks: number[] = [];

  public constructor() {
  }

  public resetUsername(): void {
    this.username = "";
  }

  public toggleParagraphDisplapy(): void {
    this.paragraphDisplay = !this.paragraphDisplay;
    this.displayButtonClicks.push(this.displayButtonClicks.length + 1)
  }

  public getClicksBackgroundColor(value: number) : string {
    return value > 4 ? "blue" : '';
  }
}
