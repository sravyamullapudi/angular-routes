import { parseHostBindings } from '@angular/compiler';
import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'tr[highLight]',
  host: {
    '(mouseover)': 'onMouseOver()'
  }
})
export class HighlightDirective {

  @Input() color: any;

  constructor(private element: ElementRef) { }

  @HostBinding('style.color') color2!: string;
  // @HostBinding('class') class: string = 'highlight';
  //using getter method
  // @HostBinding('class') get class() { return 'highlight'};
  @HostBinding('class.highlight') get hasHighlight () { return true; } 

  onMouseOver() {
    this.element.nativeElement.style.color = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = '';
    // this.color2 = '';
  }
}
