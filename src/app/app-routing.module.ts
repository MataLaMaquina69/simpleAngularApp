import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ProductoComponent } from './producto/producto.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'agregar-Clientes', component: AgregarClienteComponent
  },
  {
    path: 'agregar-Productos', component: AgregarProductosComponent
  },
  {
    path: 'productos', component: ProductoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
