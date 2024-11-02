import { Component, effect } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  input = '';
  constructor(private service: ListaService) {
    effect(() => {
      this.input = this.service.id !== -1 ? this.lista[this.service.id].nome : '';
    });
  }
  get lista() {
    return this.service.lista;
  }
  get textoBotao() {
    return this.service.id === -1 ? 'Adicionar' : 'Editar';
  }
  adicionarItem() {
    this.service.criar(this.input);
    this.input = '';
  }
}
