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
      const id = this.service.id();
      const item = this.service.lista.find(x => x.id === id);
      if (item) this.input = item.nome;
    });
  }
  get textoBotao() {
    return this.service.id() ? 'Editar' : 'Adicionar';
  }
  adicionarItem() {
    this.service.criar(this.input);
    this.input = '';
  }
}
