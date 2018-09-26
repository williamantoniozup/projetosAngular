import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];
  // cursoService: CursosService;

  constructor(private cursoService: CursosService) {
    this.nomePortal = 'http://loiane.training';
    // var servico = new CursosService(); 
    // this.cursoService = cursoService;

    this.cursos = this.cursoService.getCursos();
  }

  ngOnInit() {
  }

}
