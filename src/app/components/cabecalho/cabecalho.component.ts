import { Component, Input } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  @Input() set edicao(idItemEmEdicao: number) {
    this.idItemEmEdicao = idItemEmEdicao;
    this.input = idItemEmEdicao !== -1 ? this.lista[idItemEmEdicao].nome : '';
  }
  idItemEmEdicao = -1;
  input = '';
  constructor(private service: ListaService) { }
  get lista() {
    return this.service.lista;
  }
  get textoBotao() {
    return this.idItemEmEdicao === -1 ? 'Adicionar' : 'Editar';
  }
  adicionarItem() {
    this.service.criar(this.input);
    this.input = '';
  }
}
