import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
