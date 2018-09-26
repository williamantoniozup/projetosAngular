import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Java', 'Node', 'Angular', 'Python'];
  }
}


/* 
  @Injectable -> realiza o injeção de dependência
  Significa que a classe 'CursosService' pode ser injetada em outra classe
  para que o uso dela possa ser feito. 
  Em JS a injeção é feita atraves do constructor;

*/