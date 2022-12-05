import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Noticia } from '../Clases/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private _arrayNoticias: Noticia[];

  private _sujetoNoticias$: Subject<Noticia[]>;

  constructor() {

    this._arrayNoticias = []

    this._sujetoNoticias$ = new Subject();



   }

   public get getNoticias(): Noticia[]{
    return [...this._arrayNoticias];
   }

   public get getSujetoNoticias$(): Observable<Noticia[]>{

    return this._sujetoNoticias$.asObservable();

   }

   public añadirNoticia(titulo: string, contenido: string, fechaCreacion: Date){
    this._arrayNoticias.push(new Noticia(titulo, contenido, fechaCreacion));
    this._sujetoNoticias$.next([...this._arrayNoticias]);
   }


}
