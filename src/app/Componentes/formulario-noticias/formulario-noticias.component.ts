import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Noticia } from 'src/app/Clases/noticia';
import { NoticiasService } from 'src/app/Servicios/noticias.service';

@Component({
  selector: 'app-formulario-noticias',
  templateUrl: './formulario-noticias.component.html',
  styleUrls: ['./formulario-noticias.component.css']
})
export class FormularioNoticiasComponent implements OnInit {

  @Output() envioArrayNoticias = new EventEmitter<Noticia[]>();
  _arrayNoticias: Noticia[];
  formularioNoticia!: FormGroup;
  titulo: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  contenido: FormControl = new FormControl('', [Validators.required]);


  constructor(private servicioNoticia: NoticiasService) {

    this._arrayNoticias = this.servicioNoticia.getNoticias;
    this.servicioNoticia.getSujetoNoticias$.subscribe(noticias => this._arrayNoticias = noticias);
    

   }

  ngOnInit(): void {

    this.envioArrayNoticias.emit(this._arrayNoticias);
    this.formularioNoticia = new FormGroup({
      txtTitulo: this.titulo,
      txtContenido: this.contenido

    });
  }


  nuevaNoticia(){

    this.servicioNoticia.añadirNoticia(this.formularioNoticia.controls['txtTitulo'].value ,this.formularioNoticia.controls['txtContenido'].value, new Date());
    this._arrayNoticias = this.servicioNoticia.getNoticias;
    this.envioArrayNoticias.emit(this._arrayNoticias);

  }

}
