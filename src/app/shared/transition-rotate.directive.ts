import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTransitionRotate]'
})
export class TransitionRotateDirective{

  constructor(private el: ElementRef ) { }

  @HostListener('rotate') rotateHome(){
    const element = this.el.nativeElement;

    
  }

}
