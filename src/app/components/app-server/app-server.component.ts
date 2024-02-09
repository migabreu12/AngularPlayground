import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { LoggingService } from 'src/app/shared/services/logging.service';
import { SampleDataService } from 'src/app/shared/services/sample-data.service';

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
  encapsulation: ViewEncapsulation.Emulated,
  // Using providers: is how you provide DI of a service when the service itself is not injectable via root using the following:
  // @Injectable({
  //    providedIn: 'root'
  // })
  // As for providers, use the following code:
  // providers: [LoggingService]
  // Another way is to use the inject method to assign a local property the service. The following code illustrates that:
  // this.loggingService = inject(LoggingService);
  // Important note: The service that's injected will also be instance that's injected to child components.
  // "The instances don't propogate up, they only go down that tree of components"
  providers: [SampleDataService]
})
export class AppServerComponent implements OnInit {
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

  // Adding {static: true} allows the ngOnInit method to access the ViewChild property. static is set to false by
  // default; The view child property by default can still be used in other areas of the typescript file (just not
  // ngOnInit if static is set to false).
  // Instead of a string of the local reference, you can actually assign an element and view child will
  // select the first instance of said chosen element. This works for cutom elements too.
  // NOTE: I got an error for the following line:
  // @ViewChild('viewChildExample', { static: true }) viewChildExample: HTMLInputElement;
  // "has no initializer and is not definitely assigned in the constructor" because strict mode
  // in the compiler options of the tsconfig.json file was set to true. It must be selt for false
  // for the aforementioned line to work without errors.
  // @ViewChild('viewChildExample', { static: true }) viewChildExample; only works if strict is set to false
  @ViewChild('viewChildExample', { static: true }) viewChildExample;

  // ContentChild is like ViewChild but let's you access dom elements from within the ngContent element
  // Conntent child also works with local references passed in to the ngContent element
  @ContentChild('contentChildExample', { static: true }) contentChildExample: ElementRef;

  public username: string = "";
  public paragraphDisplay = false;
  public displayButtonClicks: number[] = [];
  public localReferenceValue: string = "";
  public displayStructuralDirective = false;
  public sampleDataServiceData: { name: string, value: number }[] = [];

  public constructor(private loggingService: LoggingService, private sampleDataService: SampleDataService) {
  }

  public ngOnInit() {
    // nativeElement worked when the property did not have a specified object type
    // There's a better way to access the dom using directives. This way of modifying dom elements is not advised
    this.viewChildExample.nativeElement.value = "Test of the viewchild from within ngOnInit";

    console.log(this.contentChildExample.nativeElement.innerText);

    this.sampleDataServiceData = this.sampleDataService.getTestData();
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

  public resetViewChildExample(): void {
    this.viewChildExample.nativeElement.value = "";
  }

  public toggleStructuralDirectiveText(): void {
    this.displayStructuralDirective = !this.displayStructuralDirective;
  }

  public testLoggingService() {
    this.loggingService.logMessage("Test Message");
  }

  public addSampleDataEntry() {
    this.sampleDataService.addTestData("Something Else", this.sampleDataServiceData.length);
    this.sampleDataServiceData = this.sampleDataService.getTestData();
  }
}
