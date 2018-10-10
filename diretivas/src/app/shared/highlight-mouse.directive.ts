import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { SelectControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this._render.setElementStyle(this._elementRef.nativeElement,
    //   'backgroundColor',
    //   'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this._render.setElementStyle(this._elementRef.nativeElement,
    //   'backgroundColor',
    //   'white');
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: String;

  @HostBinding('style.backgroundColor') get setColor(){   //utilizado se precisa de alguma manipulação.
    //qualquer código extra
    return this.backgroundColor;
  }

  private backgroundColor: String;


  constructor(/*private _elementRef: ElementRef, private _render: Renderer*/) { }

}
