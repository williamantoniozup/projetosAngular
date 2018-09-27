import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

}
