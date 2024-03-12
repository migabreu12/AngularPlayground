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
  public filteredStatus = "";
  public exampleOfNgFormCustomPipe = [
    { status: "OfflineStatus" }, { status: "TestStatus" }, { status: "Full"}, { status: "Live" }, { status: "OfflineStatus" }
  ];
  // Yhe async pipe watches for changes (like a subscription) and displays data on callback resolve
  public exampleOfAsyncPipe = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Myth Busted");
    },2000);
  })
}
