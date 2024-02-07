import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // This is another way to adjust the styling of an element rather than using the renderer.
  // It let's us create class properties that bind to the element's properties
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.color') color = 'black';

  constructor(
      private elementRef: ElementRef,
      private renderer: Renderer2
    ) { }

  public ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue");
    // this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
  }

  // Using the host listener decorator is a nice tool to use for dynamic styling
  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue");
    // this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
    this.backgroundColor = "blue";
    this.color = "white";
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent");
    // this.renderer.setStyle(this.elementRef.nativeElement, "color", "black");
    this.backgroundColor = "transparent";
    this.color = "black";
  }
}
