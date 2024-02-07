import { Directive, ElementRef, OnInit } from "@angular/core"

// Adding the square brackets surrounding the selector means you don't have to add the square brackets on the element when
// using the directive. If you do not put the square brackets then the directive would be used as an element and it's called
// an element selector.
@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    public constructor(private elementRef: ElementRef) {
    }

    public ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = "green";
    }
}