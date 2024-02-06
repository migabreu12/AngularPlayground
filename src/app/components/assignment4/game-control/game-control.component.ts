import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() startClicked = new EventEmitter<any>();
  @Output() stopClicked = new EventEmitter<any>();
  @Output() valueEmitter = new EventEmitter<any>();

  private intervalStorage: any = null;

  public ngOnInit(): void {
    this.valueEmitter = new EventEmitter<any>();
  }

  public emitStartClicked(): void {
    this.startClicked.emit();
    if(!!!this.intervalStorage) {
      // Problem is here
      // this.intervalStorage = setInterval(this.emitValue, 1000);
    }
  }

  public emitStopClicked(): void {
    this.stopClicked.emit();
    clearInterval(this.intervalStorage);
    this.intervalStorage = null;
  }

  public emitValue(): void {
    // console.log(this.getRandomNumber(0, 10));
    this.valueEmitter.emit();
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
