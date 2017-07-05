import { Directive, HostBinding, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultBackgroundColor: string = 'transparent';
  @Input() highlightBackgroundColor: string = '#337ab7';
  @Input() defaultColor: string; // set in the html via property binding
  @Input() highlightColor: string = 'white';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultBackgroundColor;
  @HostBinding('style.color') color: string = this.defaultColor;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.color = this.defaultColor;
  }

  // Angular will invoke the decorated method when the host element emits the specified event
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightBackgroundColor;
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }
}
