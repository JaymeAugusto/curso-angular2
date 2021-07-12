import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color','yellow');
    this.backgroundColor ='yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color','white');
    this.backgroundColor ='white';

  }

  // @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
    @HostBinding('style.backgroundColor') get setColor(){
      return this.backgroundColor;
    }

    private backgroundColor: string | undefined;

  constructor(
    // private elementRef: ElementRef, private renderer2: Renderer2
    ) {
    
  }

}
