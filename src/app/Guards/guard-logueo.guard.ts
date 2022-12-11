import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NoticiasService } from '../Servicios/noticias.service';
import { UsuariosService } from '../Servicios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class GuardLogueoGuard implements CanActivate {
  constructor(private servicioUsuarios: UsuariosService, private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{

      if(this.servicioUsuarios.comprobarUsuario(route.params['nombreDeUsuario'], route.params['contraseña'])){

      }


    return true;
  }
  
}
