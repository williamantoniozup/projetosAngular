import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any = {
    desc: 'descrição da tarefa',
    //responsavel: null
    responsavel: { nome: 'William' },
    texto: {
      //escrita: null
      escrita: 'aeee funfou!'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
