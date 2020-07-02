import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Producto } from '../models/productos';
import { PedidoDetalle } from '../models/pedido-detalle';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido: Pedido = new Pedido();

  constructor() {
    this.pedido = this.ultimoPedido;
  }
  guardarLocalStorage() {
    localStorage.setItem('Ultimo pedido', JSON.stringify(this.pedido));
  }
  get ultimoPedido(): Pedido {
    const pedidoLocalStorage: Pedido = new Pedido(JSON.parse(localStorage.getItem('Ultimo pedido')));
    if (pedidoLocalStorage == null) {
      return new Pedido();
    }
    return pedidoLocalStorage;
  }
  guardarPedido(){
    let listaPedidos: Pedido[] = new Array<Pedido>();
    listaPedidos = this.listadoPedidos;
    this.pedido.pedidoID = listaPedidos.length + 1 ;
    listaPedidos.push(this.pedido);
    localStorage.setItem('pedidos', JSON.stringify(listaPedidos));
    localStorage.removeItem('Ultimo pedido');
    this.pedido = new Pedido(null);
  }
  get listadoPedidos(): Pedido[]{
    let pedidos: Pedido[] = JSON.parse(localStorage.getItem('pedidos'));
    if (pedidos == null){
       return new Array<Pedido>();
     }

    return pedidos.sort((a, b) => b.pedidoID - a.pedidoID);

  }
  
}
