import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

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
  ]
})
export class CursosModule { }


/*
 O modulo de funcionalidade não importa o BrowserModule

*/