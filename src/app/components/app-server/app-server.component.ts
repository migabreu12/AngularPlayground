import { Component, EventEmitter, Input, Output } from '@angular/core';

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


  // Custom types can be created within the EventEmitter generic braces or, preferrably, use a model.
  // the () calls the constructor to create the event emitter and assign it to the serverCreated property.
  // Emitting the value uses the same typescript object creation where we use serverCreated.emit({property: value, ... })
  // Aliases work here too
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

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
