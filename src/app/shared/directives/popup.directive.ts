import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPopup]',
})
export class PopupDirective {
  constructor() {}

  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click')
  toogle() {
    this.isOpen = !this.isOpen;
  }
}
