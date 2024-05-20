import { Cliente } from './cliente';

export interface Transacao {
  id?: number;
  tipo: TipoTransacaoEnum;
  valor: number;
  cliente: Cliente;
}

export interface TransacaoDTO {
  tipo: string;
  valor: number;
  cliente: Partial<Cliente>;
}
export enum TipoTransacaoEnum {
  DEBITO = 'DEBITO',
  CREDITO = 'CREDITO',
}
