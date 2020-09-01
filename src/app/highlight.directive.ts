import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = "black"
  }

}

