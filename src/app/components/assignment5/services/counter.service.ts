import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private inactiveToActiveCounter: number = 0;
  private activeToInactiveCounter: number = 0;

  constructor() { }

  public incrementInactiveToActiveCounter(): void {
    ++this.inactiveToActiveCounter;
    console.log("The inactive to active counter is now at: " + this.inactiveToActiveCounter);
  }

  public incrementActiveToInactiveCounter(): void {
    ++this.activeToInactiveCounter;
    console.log("The active to inactive counter is now at: " + this.activeToInactiveCounter);
  }
}
