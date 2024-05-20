import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { TransacaoService } from '../../services/transacao.service';
import { getParams } from '../../utils/get-params';
import { switchMap } from 'rxjs';
import { Transacao } from '../../models/transacao';

@Component({
  selector: 'app-transacao-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    CurrencyPipe,
  ],
  templateUrl: './transacao-table.component.html',
  styleUrl: './transacao-table.component.scss',
})
export class TransacaoTableComponent {
  @Input() transacoes: Transacao[] | null = [];

  displayedColumns = ['nome', 'email', 'idade', 'numeroConta', 'acoes'];
  constructor(private transacaoService: TransacaoService) {}
}
