import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Cliente } from '../models/cliente';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getClienteById(idCliente: string) {
    return this.http.get<Cliente>(`${this.apiUrl}/${idCliente}`);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http
      .post<Cliente>(this.apiUrl, cliente)
      .pipe(tap(() => this.snackBar.open('Cadastro realizado com suecsso')));
  }
}
