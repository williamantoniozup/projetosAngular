import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  pessoa: any = {
    nome: null,
    idade: null,
    end: {
      rua: null,
      bairro: null
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
