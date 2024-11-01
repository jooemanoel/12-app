import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { TabelaComponent } from './pages/tabela/tabela.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ExcluirComponent } from './pages/excluir/excluir.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TabelaComponent,
    CabecalhoComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
