import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../../services/cliente.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cliente-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './cliente-table.component.html',
  styleUrl: './cliente-table.component.scss',
})
export class ClienteTableComponent {
  clientes$ = this.clienteService.getClientes();

  displayedColumns = ['nome', 'email', 'idade', 'numeroConta', 'acoes'];
  constructor(private clienteService: ClienteService) {}
}
