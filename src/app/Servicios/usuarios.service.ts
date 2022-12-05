import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuario } from '../Clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private _arrayUsuarios: Usuario[];

  private _sujetoUsuarios: Subject<Usuario[]>;


  constructor() { 

    this._arrayUsuarios = [new Usuario("Diego", "12345678"), new Usuario("Usuario1", "123456789"), new Usuario("Usuario2", "12345678")];

    this._sujetoUsuarios = new Subject();


  }

  public get getArrayUsuarios(){
    return [...this._arrayUsuarios];
  }

  public get getSujetoUsuarios(){
    return this._sujetoUsuarios.asObservable();
  }

  public añadirSujeto(nombreUsuario: string, contraseña: string){
    this._arrayUsuarios.push(new Usuario(nombreUsuario, contraseña));
    this._sujetoUsuarios.next([...this._arrayUsuarios]);
  }

  public comprobarUsuario(nombreUsuario: string, contraseña: string){

    let resp = false;

    for (let index = 0; index < this._arrayUsuarios.length; index++) {

      if(this._arrayUsuarios[index].getNombreUsuario == nombreUsuario && this._arrayUsuarios[index].getContraseña == contraseña){

          resp = true;

      }
      
    }

    return resp;

  }

}
