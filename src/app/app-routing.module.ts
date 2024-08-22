import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaComponent } from './pages/tabela/tabela.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ExcluirComponent } from './pages/excluir/excluir.component';

const routes: Routes = [
  {
    path: 'tabela',
    component: TabelaComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'formulario/:id',
    component: FormularioComponent
  },
  {
    path: 'excluir/:id',
    component: ExcluirComponent
  },
  {
    path: '',
    redirectTo: 'tabela',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
