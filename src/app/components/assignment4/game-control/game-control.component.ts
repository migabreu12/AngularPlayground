import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent {
  @Output() startClicked = new EventEmitter<any>();
  @Output() stopClicked = new EventEmitter<any>();
  @Output() valueEmitted = new EventEmitter<any>();

  private intervalStorage: any = null;

  public emitStartClicked(): void {
    this.startClicked.emit();
    if(!!!this.intervalStorage) {
      this.intervalStorage = setInterval(() => {
        this.valueEmitted.emit(this.getRandomNumber(0, 10));
      }, 1000);
    }
  }

  public emitStopClicked(): void {
    this.stopClicked.emit();
    clearInterval(this.intervalStorage);
    this.intervalStorage = null;
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
