import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ClienteService } from './services/cliente.service';
import { ProductoComponent } from './producto/producto.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ProductosService } from './services/productos.service';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidosService } from './services/pedidos.service';
import { ListadoPedidosComponent } from './listado-pedidos/listado-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    AgregarClienteComponent,
    ProductoComponent,
    AgregarProductosComponent,
    PedidoComponent,
    ListadoPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ClienteService,
    ProductosService,
    PedidosService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
