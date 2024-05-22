import { Component, OnInit } from '@angular/core';
import { TransacaoFormComponent } from '../../components/transacao-form/transacao-form.component';
import { TransacaoTableComponent } from '../../components/transacao-table/transacao-table.component';
import { getParams } from '../../utils/get-params';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TransacaoService } from '../../services/transacao.service';
import { ClienteService } from '../../services/cliente.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Transacao } from '../../models/transacao';


@Component({
  selector: 'app-detalhe-cliente-page',
  standalone: true,
  imports: [TransacaoFormComponent, TransacaoTableComponent, CommonModule, CurrencyPipe],
  templateUrl: './detalhe-cliente-page.component.html',
  styleUrl: './detalhe-cliente-page.component.scss',
})
export class DetalheClientePageComponent implements OnInit {
  clienteId = this.route.snapshot.paramMap.get('id');
  saldo$?: Observable<number>;
  transacoes$?: Observable<Transacao[]>;
  constructor(
    private transacaoService: TransacaoService,
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.buscarDados();
  }

  buscarDados() {
    this.buscarSaldo();
    this.buscarTransacoes();
  }

  buscarSaldo() {
    if (this.clienteId)
      this.saldo$ = this.transacaoService.getSaldoByCliente(this.clienteId);
  }

  buscarTransacoes() {
    if (this.clienteId)
      this.transacoes$ = this.transacaoService.getTransacoesByCliente(
        this.clienteId
      );
  }
}
