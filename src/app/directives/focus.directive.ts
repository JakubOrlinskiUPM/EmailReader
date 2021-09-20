import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onEnter() {
    this.highlight('bisque');
  }

  @HostListener('mouseleave') onLeave() {
    this.highlight('');
  }


  highlight(color?: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
