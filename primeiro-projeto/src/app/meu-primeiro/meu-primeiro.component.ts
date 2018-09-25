import { Component } from '@angular/core';   //importanto o módulo da biblioteca do angular2, do pacote do core;

@Component({
    selector: 'meu-primeiro-component',
    template: `
        <p>Meu primeiro component com Angular 2!</p> 
    `
}) //falando pro angular que essa classe é um componente do angular, pro transpiler (decorator), passamos metadados para esse component.

export class MeuPrimeiroComponent {}


/*
    selector ->  nome da tag HTML que queremos criar para utilizar o component
    template -> precisamos de um template HTML

    export para expor a classe;
*/