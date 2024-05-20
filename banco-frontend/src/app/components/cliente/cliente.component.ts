import { Component, OnInit } from '@angular/core';
import { Cliente, ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  newCliente: Cliente = { nome: '', idade: 0, email: '', numeroConta: '' };

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
  }

  addCliente(): void {
    this.clienteService.createCliente(this.newCliente).subscribe(cliente => {
      this.clientes.push(cliente);
      this.newCliente = { nome: '', idade: 0, email: '', numeroConta: '' }; // Resetar o formulário
    });
  }
}
