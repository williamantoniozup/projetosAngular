import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ["Angular 6","NodeJS","React"];

  mostrarMsg: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  onMostrarMsg(){
    this.mostrarMsg = !this.mostrarMsg;
  }
}
