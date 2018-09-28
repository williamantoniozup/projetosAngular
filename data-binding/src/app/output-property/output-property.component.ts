import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']//,
  //outputs:['mudouValor'] -> posso passar assim, ao inves de usar o Decorator


})
export class OutputPropertyComponent implements OnInit {

  @Input('valor') valor: number = 0;

  @Output() mudouValor: any = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef; // usando diretamente a referencia do nosso elemento que está no nosso componente html

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    // console.log(this.campoValorInput.nativeElement.value);
    this.campoValorInput.nativeElement.value++;
    // this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    // this.valor--;
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

}
