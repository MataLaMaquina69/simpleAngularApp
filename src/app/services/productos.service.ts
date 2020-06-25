import { Injectable } from '@angular/core';
import { Producto } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  agregarProductoLocalStorage(producto: Producto) {
    let productosAntiguos: Producto[] = this.productosLocalStorage;
    producto.productoID = productosAntiguos.length + 1;

    productosAntiguos.push(producto);
    localStorage.setItem('Productos', JSON.stringify(productosAntiguos));
  }
  get productosLocalStorage(): Producto[]{

    let productoLocalSotrage: Producto[] = JSON.parse(localStorage.getItem('Productos'));
    if (productoLocalSotrage == null) {
      return new Array<Producto>();
    }
    return productoLocalSotrage;
  }
}
