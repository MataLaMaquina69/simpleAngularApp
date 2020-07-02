import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/productos';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  productos: Array<Producto> = new Array<Producto>();

  constructor(private productoService: ProductosService, private pedidoServicio: PedidosService) { }

  ngOnInit(): void {
    this.productos = this.productoService.productosLocalStorage;
  }

  buscarProductos(nombreBuscar) {
    this.productos = this.productoService.productosLocalStorage.filter(producto => {
      return producto.nombre.toLowerCase().includes(nombreBuscar.toLowerCase());
    });

  }
  agregar(producto: Producto) {
    this.pedidoServicio.pedido.agregarProducto(producto);
    this.pedidoServicio.guardarLocalStorage();
    alert('Producto agregado');

  }
}
