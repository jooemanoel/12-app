import { Component, Input } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';
import { Item } from 'src/app/shared/item';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  @Input() set edicao(idItemEmEdicao: number) {
    this.idItemEmEdicao = idItemEmEdicao;
    if (idItemEmEdicao !== -1)
      this.input = this.lista[idItemEmEdicao].nome;
  }
  idItemEmEdicao = -1;
  input = '';
  constructor(private service: ListaService) { }
  get lista() {
    return this.service.getLista();
  }
  get textoBotao() {
    return this.idItemEmEdicao === -1 ? 'Adicionar' : 'Editar';
  }
  adicionarItem() {
    const item: Item = {
      id: 0,
      nome: this.input,
      qt: 0
    };
    this.service.criar(item);
    this.input = '';
  }
}
