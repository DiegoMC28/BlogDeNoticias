import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './Componentes/formulario-login/formulario-login.component';
import { FormularioNoticiasComponent } from './Componentes/formulario-noticias/formulario-noticias.component';


const routes: Routes = [{path:'formularioNoticia', component: FormularioNoticiasComponent}, {path:'', component: FormularioLoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
