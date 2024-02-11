import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultBackgroundColor = 'transparent';
  @Input() highlightBackgroundColor = 'blue';
  @Input() defaultColor = 'black';
  @Input() highlightColor = 'white';

  // This is another way to adjust the styling of an element rather than using the renderer.
  // It let's us create class properties that bind to the element's properties
  // Assigning the value of the background color here (before ngOnInit) will set the background color on first page load
  // to transperent all the time (regardless if it was overwritten) because we, at this point, do not have the
  // input value from external sources. The assigment, to fix this, should be done in ngOnInit.
  // Cycle goes custom -> native.
  // You can also assign the input value an alias of the directive name and then assign the value there too. For example
  // assigning highlightBackgroundColor alias to @Input('appBetterHighlight') highlightBackgroundColor and then in the element using
  // the directive like [appBetterHighlight]="'blue'".
  @HostBinding('style.backgroundColor') backgroundColor;
  @HostBinding('style.color') color;

  constructor(
    ) { }

  public ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue");
    // this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }

  // Using the host listener decorator is a nice tool to use for dynamic styling
  @HostListener('mouseenter') mouseEnter() {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "blue");
    // this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
    this.backgroundColor = this.highlightBackgroundColor;
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent");
    // this.renderer.setStyle(this.elementRef.nativeElement, "color", "black");
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }
}
