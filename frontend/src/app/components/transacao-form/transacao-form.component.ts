import { TransacaoService } from './../../services/transacao.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  TipoTransacaoEnum,
  Transacao,
  TransacaoDTO,
} from '../../models/transacao';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-transacao-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
  ],
  templateUrl: './transacao-form.component.html',
  styleUrl: './transacao-form.component.scss',
})
export class TransacaoFormComponent {
  formControl = this.fb.nonNullable.group({
    tipo: '',
    valor: 0,
  });

  @Input() clienteId: string | null = null;

  @Output() transacaoConcluidaEmmitter = new EventEmitter();

  tipoTransacaoEnum = TipoTransacaoEnum;

  constructor(
    private transacaoService: TransacaoService,
    private fb: FormBuilder
  ) {}

  clear() {
    this.formControl.reset();
  }

  addTransacao(): void {
    if (this.formControl.invalid) return;

    const transacao = {
      ...this.formControl.value,
      cliente: { id: Number(this.clienteId) },
    } as TransacaoDTO;

    this.transacaoService.createTransacao(transacao).subscribe((cliente) => {
      this.formControl.reset();
      this.transacaoConcluidaEmmitter.emit();
    });
  }
}
