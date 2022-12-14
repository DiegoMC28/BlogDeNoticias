import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstilosComponent } from './Componentes/estilos/estilos.component';
import { FormularioLoginComponent } from './Componentes/formulario-login/formulario-login.component';
import { FormularioNoticiasComponent } from './Componentes/formulario-noticias/formulario-noticias.component';
import { TarjetaNoticiaComponent } from './Componentes/tarjeta-noticia/tarjeta-noticia.component';
import { ContenedorNoticiasComponent } from './Componentes/contenedor-noticias/contenedor-noticias.component';
import { DetallesComponent } from './Componentes/detalles/detalles.component';


@NgModule({
  declarations: [
    AppComponent,
    EstilosComponent,
    FormularioLoginComponent,
    FormularioNoticiasComponent,
    TarjetaNoticiaComponent,
    ContenedorNoticiasComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
