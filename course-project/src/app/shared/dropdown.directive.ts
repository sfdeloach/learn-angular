import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  toggle: boolean = false;

  constructor(private elementRef: ElementRef) {
    console.dir(elementRef.nativeElement);
    // el.nativeElement.classList.add("open");
  }

  @HostListener('onclick') onClick() {
    console.log("received a click");
    this.toggle = !this.toggle;
    this.dropdown(this.toggle);
  }

  private dropdown(isVisible: boolean): void {
    isVisible ? this.elementRef.nativeElement.classList.add("open") :
      this.elementRef.nativeElement.classList.remove("open");
  }
}
