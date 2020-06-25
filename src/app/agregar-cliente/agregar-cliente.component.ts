import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../models/clientes';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent implements OnInit {
  formularioAgregar: FormGroup;
  cliente: Cliente = new Cliente();

  constructor(private fb: FormBuilder, public clienteServicio: ClienteService) { }

  ngOnInit(): void {
    this.formularioAgregar  = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  agregar() {
    this.cliente = this.formularioAgregar.value as Cliente;
    this.clienteServicio.agregarLocalStorage(this.cliente);
    this.formularioAgregar.reset();
  }

}
