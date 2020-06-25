import { Injectable } from '@angular/core';
import { Cliente } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }


  agregarLocalStorage(cliente: Cliente) {
    let clientesAntiguos: Cliente[] = this.clientesLocalStorage;
    cliente.clienteId = clientesAntiguos.length + 1;
    clientesAntiguos.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientesAntiguos));
  }

  get clientesLocalStorage(): Cliente[] {

    let clientesDesdeLocalStorage: Cliente[] = JSON.parse(localStorage.getItem('clientes'));
    if(clientesDesdeLocalStorage == null) {
      return new Array<Cliente>();
    }
    return clientesDesdeLocalStorage;
  }

}
