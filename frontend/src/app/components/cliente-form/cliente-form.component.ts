import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
})
export class ClienteFormComponent {
  formControl = this.fb.nonNullable.group<Cliente>({
    nome: '',
    email: '',
    numeroConta: '',
    idade: 0,
  });

  constructor(
    private clienteService: ClienteService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  clear() {
    this.formControl.reset();
  }

  addCliente(): void {
    if (this.formControl.invalid) return;

    const cliente = this.formControl.value as Cliente;

    this.clienteService.createCliente(cliente).subscribe((cliente) => {
      this.router.navigateByUrl('/clientes');
    });
  }
}
