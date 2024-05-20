import { Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteComponent },
  // Adicione outras rotas aqui, se necessário
];

export default routes; // ou export const routes;
