import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  /* 
     ou poderia ser declarado o CSS desse jeito, usando o template string

  styles: [
    `
      .highlight{
          background-color: yellow;
          font-weight: bold;
      }
    `
  ]
  */
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  mensagem: String = 'Testando property binding';
  urlImage: string = 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=320&txt_altura=240&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Gerador%20Imagem%20%234Devs&tamanho_fonte=10';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';
  
  nomeDoCurso: string = 'Angular';
  valorInicial: number = 10;

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

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    // console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver; // nega o valor, coloca mouse fica true, tira o mouse fica false again
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }
}
