import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  /* 
  Expor os input por aqui:
  input:[
    'nomeCurso:nome'
  ]

  */
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso: string = ''; 

  // @Output('nomeTeste') nomeTesteExp: string = this.nomeCurso;
  /*assim conseguimos expor uma propriedade chamada nome 
  para o seletor 'app-curso'. Internamente essa propriedade
  tem o nome 'nomeCurso', porem externamente exponho ela como 'nome'
  */
  constructor() { }

  ngOnInit() {
  }

}
