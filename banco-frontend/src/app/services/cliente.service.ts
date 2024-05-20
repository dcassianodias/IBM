import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  nome: string;
  idade: number;
  email: string;
  numeroConta: string;
}

@Injectable({
  providedIn: 'root' // Fornecendo no provedor raiz
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/api/clientes'; // URL do seu backend

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }
}
