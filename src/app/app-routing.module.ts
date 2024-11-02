import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaComponent } from './pages/tabela/tabela.component';

const routes: Routes = [
  {
    path: 'tabela',
    component: TabelaComponent
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
