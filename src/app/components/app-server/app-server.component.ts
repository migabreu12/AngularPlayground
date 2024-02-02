import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server', //angular element
  // selector: '[app-server∂]', // attribute way
  // selector: '.app-server', // css class way
  templateUrl: './app-server.component.html',
  styleUrls: ['./app-server.component.scss'],
  // Encapsulation is a feature of angular that let's each component have a unique class
  // for which angular then applies the styles found in the component's styleUrls (or styles).
  // For example, adding color red to this component's scss file will change all text to red within
  // this component; The way the color: red is applied, though, is via the encapsulation class that's
  // applied to this component's html elements found within the html file (templateUrl).
  // Setting ViewEncapsulation.None turns this angular feature off.Turning off encapsulation
  // removes the html classes which then opens up the component to be modified by other existing styles
  // from parent components. Encapsulation also ensures that other component styling (like parent components)
  // don't leak into this component.
  encapsulation: ViewEncapsulation.Emulated
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
  public localReferenceValue: string = "";

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

  public updateLocalReferenceValue(localReferencedElement: HTMLInputElement, value: string) {
    this.localReferenceValue = value;
  }
}
