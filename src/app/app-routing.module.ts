import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorNoticiasComponent } from './Componentes/contenedor-noticias/contenedor-noticias.component';
import { DetallesComponent } from './Componentes/detalles/detalles.component';
import { FormularioLoginComponent } from './Componentes/formulario-login/formulario-login.component';
import { FormularioNoticiasComponent } from './Componentes/formulario-noticias/formulario-noticias.component';


const routes: Routes = [
{path:'formularioNoticia/:nombreDeUsuario/:contraseña', component: ContenedorNoticiasComponent}, 
{path:'', component: FormularioLoginComponent}, 
{path:'detalles/:titulo/:contenido', component: DetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
