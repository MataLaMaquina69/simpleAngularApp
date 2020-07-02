import { PedidoDetalle } from './pedido-detalle';
import { Producto } from './productos';
import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';

export class Pedido {
    pedidoID: number;
    clienteID: number;
    nombreCliente: string;
    total: number;
    pedidoDetalle: Array<PedidoDetalle>;

    constructor(datos?: Pedido) {
        if  (datos != null) {
            this.pedidoID = datos.pedidoID;
            this.clienteID = datos.clienteID;
            this.nombreCliente = datos.nombreCliente;
            this.total = datos.total;
            this.pedidoDetalle = datos.pedidoDetalle;
            return;
        }

        this.pedidoID = this.pedidoID;
        this.clienteID = this.clienteID;
        this.nombreCliente = this.nombreCliente;
        this.total = this.total;
        this.pedidoDetalle = new Array<PedidoDetalle> ();
    }

    agregarProducto(producto: Producto) {
        const pedidoDetalle: PedidoDetalle = new PedidoDetalle();
        pedidoDetalle.cantidad = 1;
        pedidoDetalle.nombreProducto =  producto.nombre;
        pedidoDetalle.precio = producto.precio;
        pedidoDetalle.productoID = producto.productoID;
        pedidoDetalle.total = pedidoDetalle.cantidad * pedidoDetalle.precio;

        const existe: number = this.pedidoDetalle.filter(x => x.productoID === producto.productoID).length;
        if (existe > 0){
            const posicion: number = this.pedidoDetalle.findIndex(x => x.productoID === producto.productoID);
            this.pedidoDetalle[posicion].cantidad++;
            this.pedidoDetalle[posicion].total = this.pedidoDetalle[posicion].cantidad * this.pedidoDetalle[posicion].precio;

        } else {
            this.pedidoDetalle.push(pedidoDetalle);
        }
        this.actualizarTotal();


  }
  private actualizarTotal() {
      this.total = 0;
      /* for (const producto of this.pedidoDetalle){
          this.total = this.total + producto.total;
      }
      this.pedidoDetalle.forEach(producto =>{
        this.total = this.total + producto.total;
      }); */
      this.pedidoDetalle.forEach(producto => {
        this.total = this.total +  producto.total;
      });
  }

  public actualizarCantidades(posicion: number) {
    this.pedidoDetalle[posicion].total =  this.pedidoDetalle[posicion].cantidad *
    this.pedidoDetalle[posicion].precio;
    this.actualizarTotal();

  }
}
