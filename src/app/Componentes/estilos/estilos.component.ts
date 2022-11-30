import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent implements OnInit {

  @Output() cambiarEstilo:EventEmitter<boolean> = new EventEmitter<boolean>();
  estilo: boolean;
  constructor() {
    this.estilo = true;
   }

  ngOnInit(): void {
  }

  cambiaEstilo(){
    this.estilo = !this.estilo;
  }

}
