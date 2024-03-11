import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss']
})
export class PipesExampleComponent {
  public exampleDate = new Date();
  public exampleString = "Example String";
  public reallyLongString = "Very long example string lhsjadflksjafdlksajdfasljkf";
  public exampleStatuses = ["small", "large"];
}
