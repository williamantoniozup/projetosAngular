import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective implements OnInit {

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'blue';


  constructor(/*private _elementRef: ElementRef, private _render: Renderer*/) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
