import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment} from '../environments/environment';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnoComponent } from './components/alumnos/alumno/alumno.component';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InnovacionesComponent } from './components/innovaciones/innovaciones.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';

//services
import { ProductService} from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AlumnoComponent,
    AlumnosListComponent,
    ContactoComponent,
    InicioComponent,
    InnovacionesComponent,
    ModelosComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
    
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
