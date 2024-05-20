import { Routes } from '@angular/router';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteTableComponent } from './components/cliente-table/cliente-table.component';
import { TransacaoTableComponent } from './components/transacao-table/transacao-table.component';
import { DetalheClientePageComponent } from './pages/detalhe-cliente-page/detalhe-cliente-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClienteTableComponent },
  { path: 'clientes/adicionar', component: ClienteFormComponent },
  { path: 'clientes/:id', component: DetalheClientePageComponent },
  // Adicione outras rotas aqui, se necessário
];

export default routes; // ou export const routes;
