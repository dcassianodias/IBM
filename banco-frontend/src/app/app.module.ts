import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importe RouterModule aqui

import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteService } from './services/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule // Importe RouterModule aqui
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
