import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment8',
  templateUrl: './assignment8.component.html',
  styleUrls: ['./assignment8.component.scss']
})
export class Assignment8Component implements OnInit {
  public gemstonesForSale = [];

  public ngOnInit(): void {
    this.gemstonesForSale = [
      {
        name: "Lapis Lazuli",
        amount: 500
      },
      {
        name: "Malachite",
        amount: 30
      },
      {
        name: "Carnelian",
        amount: 700
      },
    ];


  }
}
