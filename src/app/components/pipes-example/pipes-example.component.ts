import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss']
})
export class PipesExampleComponent {
  public exampleDate = new Date();
  public exampleString = "Example String";
  public exampleStatuses = ["small", "large"];
}
