import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InnovacionesComponent } from './components/innovaciones/innovaciones.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
{path:'', component:InicioComponent},
{path:'contacto', component: ContactoComponent},
{path:'innovaciones', component: InnovacionesComponent},
{path:'modelos', component:ModelosComponent},
{path:'products', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
