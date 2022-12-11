import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/Clases/noticia';
import { NoticiasService } from 'src/app/Servicios/noticias.service';

@Component({
  selector: 'app-contenedor-noticias',
  templateUrl: './contenedor-noticias.component.html',
  styleUrls: ['./contenedor-noticias.component.css']
})
export class ContenedorNoticiasComponent implements OnInit {
  noticias!: Noticia[];
  constructor() { }

  ngOnInit(): void {
  }

}
