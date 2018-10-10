import { element } from 'protractor';
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[FundoAmarelo]' // p -> significa que vai aplicar somente em paragrafos.
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    //console.log(_elementRef);
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow'; // evitar usar desta maneira.
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'backgroundColor',
      'yellow'
      );
  }

}
