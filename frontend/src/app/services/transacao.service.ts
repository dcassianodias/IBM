import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Transacao, TransacaoDTO } from './../models/transacao';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class TransacaoService {
  private apiUrl = 'http://localhost:8080/api/transacoes';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getTransacoesByCliente(idCliente: string) {
    return this.http.get<Transacao[]>(`${this.apiUrl}/cliente/${idCliente}`);
  }

  getSaldoByCliente(idCliente: string) {
    return this.http.get<number>(`${this.apiUrl}/saldo/${idCliente}`);
  }

  createTransacao(transacao: TransacaoDTO): Observable<Transacao> {
    return this.http
      .post<Transacao>(this.apiUrl, transacao)
      .pipe(tap(() => this.snackBar.open('Cadastro realizado com suecsso')));
  }
}
