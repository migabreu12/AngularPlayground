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
  // Another thing to note is that adding the service to the providers will create a new instance of thet service.
  // Of course, adding the service to the providers list of the app module will ensure every injection shares the same instance.
  // The aforementioned statement is true unless it's overwritten using a local providers service declaration.
  // The @Injectable() meta data tag needs to be added to classes that are not components or directives to ensure that
  // the Angular dependency injector can inject services to the constructor; This is true for services.
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
    // The following line is used to test if the service test data property was being updated rather than a local version.
    // The data service indeed gets updated so the same data propogates throughout the app.
    // The same data gets used because of the hierarchy instance of the DI'ed object but what was surprising was
    // that the copied objects (properties that copy the value of the data service property) get their values updated too.
    // Seems like it's copied by reference rather than value or two way data binding. 
    // * if passing an object, array, or the like, then it is Pass by Reference, and for primitive types like number, it is Pass by Value
    // * https://www.infragistics.com/community/blogs/b/infragistics/posts/angular-components-pass-by-reference-or-pass-by-value#:~:text=Since%20data%20is%20being%20passed,it%20is%20Pass%20by%20Value.
    // console.log("This is the length of the data set in the service: " + this.sampleDataService.getTestData().length)
    // The proper way to get data updates is via emits rather than local variables assigned to the service property via reference.
    // We can more easily track changes through emitters and setter from a service rather than local variable changes.
    // Defensive programming is the name of the game.
  }
}
