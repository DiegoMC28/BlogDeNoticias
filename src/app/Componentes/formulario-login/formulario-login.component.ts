import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Clases/usuario';

import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  _arrayUsuarios: Usuario[];
  formularioLoguin!: FormGroup;
  nombreDeUsuario: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  contraseña: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(private servicioUsuarios: UsuariosService) {
    this._arrayUsuarios = [];
    this.servicioUsuarios.getSujetoUsuarios.subscribe(noticias => this._arrayUsuarios = noticias);

   }

  ngOnInit(): void {

    this.formularioLoguin = new FormGroup({
      txtNombreUsuario: this.nombreDeUsuario,
      txtContraseña: this.contraseña

    });

  }


  comprobarUsuario(nombreUsuario: string, contraseña: string){

    this.servicioUsuarios.comprobarUsuario(nombreUsuario, contraseña);

  }




}
