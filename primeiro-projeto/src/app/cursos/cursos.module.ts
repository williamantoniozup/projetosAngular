import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent  // não foi declarado dentro do 'exports' logo esse componente fica privado, só pertence a esse módulo
  ],
  exports: [
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }


/*
 O modulo de funcionalidade não importa o BrowserModule

 no 'providers' declaramos quais vão ser nossos serviços fornecedores

*/