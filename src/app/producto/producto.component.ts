import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  productos: Array<Producto> = new Array<Producto>();

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.productos = this.productoService.productosLocalStorage;
  }

  buscarProductos(event) {

  }
}
