import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/clientes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientes: Array<Cliente> = new Array<Cliente>();
  constructor(private clienteServicio: ClienteService) { }

  ngOnInit(): void {
    this.clientes = this.clienteServicio.clientesLocalStorage;


  }
  buscarClientes(nombreBuscar) {
    
    this.clientes = this.clienteServicio.clientesLocalStorage.filter(cliente => {
      return cliente.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase);
    });
  
  }
}
