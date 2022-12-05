import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/Clases/noticia';
import { NoticiasService } from 'src/app/Servicios/noticias.service';

@Component({
  selector: 'app-tarjeta-noticia',
  templateUrl: './tarjeta-noticia.component.html',
  styleUrls: ['./tarjeta-noticia.component.css']
})
export class TarjetaNoticiaComponent implements OnInit {

  @Input('noticia') noticia!: Noticia;

  constructor(private servicioNoticias: NoticiasService) { 


  }

  ngOnInit(): void {
  }


  eliminarPregunta(){
    this.servicioNoticias.eliminarPregunta(this.noticia);
  }

}
