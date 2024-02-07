import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(
      private elementRef: ElementRef,
      private renderer: Renderer2
    ) { }

  public ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue");
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
  }
}
