import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  elementRef: ElementRef;

  constructor(element: ElementRef) {
    this.elementRef = element;
  }

  ngOnInit () {
    this.elementRef.nativeElement.style.backgroundColor = "brown";
  }
}
