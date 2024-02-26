import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  public message: string;

  public constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.message = this.route.snapshot.data["message"];
  }
}
