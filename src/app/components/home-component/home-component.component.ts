import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  // styleUrls: ['./home-component.component.scss']
  styles: [`
    h3 {
      color: green
    }
  `]
})
export class HomeComponentComponent {
  public parameterPassedInViaPath: { id: number, name: string };

  public constructor(private route: ActivatedRoute) {
    this.parameterPassedInViaPath = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    }
  }

}
