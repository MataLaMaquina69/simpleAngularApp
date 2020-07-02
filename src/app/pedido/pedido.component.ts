import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {


  constructor(public pedidoServicio: PedidosService) { }

  ngOnInit(): void {
  }

  calcularTotal(posicion: number) {
    this.pedidoServicio.pedido.actualizarCantidades(posicion);
    this.pedidoServicio.guardarLocalStorage();
  }

  guardar(){
    this.pedidoServicio.guardarPedido();
  }
  eliminar(posicion: number) {
    this.pedidoServicio.pedido.pedidoDetalle.splice(posicion, 1);
    this.pedidoServicio.guardarLocalStorage();


  }

}
