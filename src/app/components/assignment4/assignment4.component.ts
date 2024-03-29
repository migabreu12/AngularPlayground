import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.scss']
})
export class Assignment4Component {
  public startClicked = false;
  public EmittedValues: number[] = [];

  public startButtonClicked(): void {
    this.startClicked = true;
  }

  public stopButtonClicked(): void {
    this.startClicked = false;
  }
  
  public valueEmitted(event: number): void {
    this.EmittedValues.push(event);
  }

  public emittedValueIsEven(value: number): boolean {
    return value%2 == 0;
  }
}
