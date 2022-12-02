import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstilosComponent } from './Componentes/estilos/estilos.component';
import { FormularioLoginComponent } from './Componentes/formulario-login/formulario-login.component';

@NgModule({
  declarations: [
    AppComponent,
    EstilosComponent,
    FormularioLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
