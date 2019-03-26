import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnoComponent } from './components/alumnos/alumno/alumno.component';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InnovacionesComponent } from './components/innovaciones/innovaciones.component';
import { ModelosComponent } from './components/modelos/modelos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AlumnoComponent,
    AlumnosListComponent,
    ContactoComponent,
    InicioComponent,
    InnovacionesComponent,
    ModelosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
