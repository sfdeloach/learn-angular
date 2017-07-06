import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // HostBinding binds to any property available on elementRef.nativeElement
  // ...use console.dir(elementRef.nativeElement) to see all available properties
  @HostBinding('className') css: string = "btn-group dropup";
  isVisible: boolean = false;

  constructor(private elementRef: ElementRef) {}

  // HostListener binds to any event emitted by the element
  // ...refer to the MDN event reference for details
  @HostListener('click') click() {
    this.isVisible = !this.isVisible;
    this.isVisible ? this.css = "btn-group dropup open": this.css = "btn-group dropup";
  }
}
