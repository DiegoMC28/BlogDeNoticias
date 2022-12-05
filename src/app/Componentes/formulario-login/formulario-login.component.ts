import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Clases/usuario';
import { Router } from '@angular/router';

import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

  _arrayUsuarios: Usuario[];
  formularioLoguin!: FormGroup;
  nombreDeUsuario: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  contraseña: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(private router: Router, private servicioUsuarios: UsuariosService) {
    this._arrayUsuarios = [];
    this.servicioUsuarios.getSujetoUsuarios.subscribe(usuarios => this._arrayUsuarios = usuarios);

   }

  ngOnInit(): void {

    this.formularioLoguin = new FormGroup({
      txtNombreUsuario: this.nombreDeUsuario,
      txtContraseña: this.contraseña

    });

  }


  iniciarSesion(){

    if(this.formularioLoguin.controls['txtNombreUsuario'].valid && this.formularioLoguin.controls['txtContraseña'].valid && this.servicioUsuarios.comprobarUsuario(this.formularioLoguin.controls['txtNombreUsuario'].value, this.formularioLoguin.controls['txtContraseña'].value) == true){

      this.router.navigate(['/formularioNoticia']);

    }


  }




}
