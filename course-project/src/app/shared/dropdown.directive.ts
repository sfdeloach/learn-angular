import {
  Directive,
  Input,
  OnDestroy,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDropdown]' // attribute selector style
})
export class DropdownDirective implements OnDestroy {
  // HostBinding binds to any property available on elementRef.nativeElement
  // ...use console.dir(elementRef.nativeElement) to see all available properties
  @HostBinding('class.open') classToggleState: boolean = false;
  private mouseOnElement: boolean = false;
  private timeID;

  // HostListener binds to any event emitted by the element
  // ...refer to the MDN event reference for details
  @HostListener('click') click() {
    this.classToggleState = !this.classToggleState;
  }

  // Any click outside of this element closes the menu
  @HostListener('document:click') closeMenu() {
    if (!this.mouseOnElement) {
      this.classToggleState = false;
    }
  }

  // Next five methods set the timer to automatically close menu when
  // the mouse exits element after two seconds
  @HostListener('mouseenter') mouseInside() {
    this.mouseOnElement = true;
    this.cancelTimer();
  }

  @HostListener('mouseleave') mouseOutside() {
    this.mouseOnElement = false;
    this.startTimer();
  }

  startTimer() {
    this.timeID = setTimeout(() => {
      this.classToggleState = false;
      this.timeID = undefined;
    }, 2000);
  }

  cancelTimer() {
    clearTimeout(this.timeID);
    this.timeID = undefined;
  }

  ngOnDestroy() {
    if (this.timeID) {
      clearTimeout(this.timeID);
    }
  }
}
