import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ProductoComponent } from './producto/producto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ListadoPedidosComponent } from './listado-pedidos/listado-pedidos.component';


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
  },
  {
    path: 'pedidos', component: PedidoComponent
  },
  {
    path: 'listado-pedidos', component: ListadoPedidosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
