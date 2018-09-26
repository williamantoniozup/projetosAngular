import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import {CursosModule} from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule 
    /*com esse modulo 'CursosModule' importado aqui, td que estiver dentro do 'exports' do cursos.module.ts consigo 
      utilizar nos componentes que estão declarados no 'declarations' do app.module.ts
    
    */
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
Essa classe vai representar um módulo, por isso estamos usando o decorator '@NgModule', que a
grande maioria fazem parte do @angular/coreSs

Metadados declarados:

Declarations - vamos listar todos nossos componentes, diretivas e pipes que queremos nesse módulo.

Providers -> onde vamos colocar os serviços que vao ficar disponíveis para todos os componentes declarados nesse módulo.
Os serviços que forem declarados dentro do providers possuem escopo global na aplicação.

Bootstrap -> só é encontrado no módulo raiz do nosso projeto. Serve pra mostrar qual o componente que
deve ser instanciando quando executarmos a aplicação, que vai ser o componente que vai servir como container do nosso
projeto.

Para criar um module... cd  /home/william/ProjetosZup/Angular-curso/projetosAngular/primeiro-projeto

ng g module cursos

*/
