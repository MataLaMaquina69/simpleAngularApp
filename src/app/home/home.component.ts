import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/clientes';
import { PedidosService } from '../services/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientes: Array<Cliente> = new Array<Cliente>();
  constructor(private clienteServicio: ClienteService, private pedidoServicio: PedidosService, private router: Router ) { }

  ngOnInit(): void {
    this.clientes = this.clienteServicio.clientesLocalStorage;
  }
  buscarClientes(nombreBuscar) {
    this.clientes = this.clienteServicio.clientesLocalStorage.filter(cliente => {
      return cliente.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase);
    });
  }

  irAProductos(cliente: Cliente) {
    this.pedidoServicio.pedido.clienteID = cliente.clienteId;
    this.pedidoServicio.pedido.nombreCliente = `${cliente.nombre} ${cliente.apellido}`;
    this.pedidoServicio.guardarLocalStorage();
    this.router.navigateByUrl('/productos');
  }
}
