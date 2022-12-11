import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  titulo: string;
  contenido: string;

  constructor(private rutaActiva: ActivatedRoute, private router: Router) {

   this.titulo = this.rutaActiva.snapshot.params['titulo'];
   this.contenido = this.rutaActiva.snapshot.params['contenido'];

   }

  ngOnInit(): void {
  }

  volver(){
    this.router.navigate(['/formularioNoticia']);
  }

}
