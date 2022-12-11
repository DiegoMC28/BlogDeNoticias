import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/Clases/noticia';
import { NoticiasService } from 'src/app/Servicios/noticias.service';

@Component({
  selector: 'app-tarjeta-noticia',
  templateUrl: './tarjeta-noticia.component.html',
  styleUrls: ['./tarjeta-noticia.component.css']
})
export class TarjetaNoticiaComponent implements OnInit {

  @Input('noticia') noticia!: Noticia;
  @Output() envioArrayNoticias = new EventEmitter<Noticia[]>();

  constructor(private servicioNoticias: NoticiasService, private router: Router) { 
    

  }

  ngOnInit(): void {
    
  }


  verDetalles(){
    this.router.navigate(['/detalles/', this.noticia.getTitulo, this.noticia.getContenido]);
  }

  eliminarPregunta(){
    this.servicioNoticias.eliminarPregunta(this.noticia);
    this.envioArrayNoticias.emit(this.servicioNoticias.getNoticias);
  }

}
