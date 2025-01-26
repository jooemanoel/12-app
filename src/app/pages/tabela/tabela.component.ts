import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  constructor(private service: ListaService) { }
  get lista() {
    return this.service.lista;
  }
  ngOnInit() {
    this.service.carregar();
  }
  ordenarPorNome(crescente: boolean) {
    this.service.ordenarPorNome(crescente);
  }
  editarItem(item: Item) {
    this.service.habilitarEdicao(item);
  }
  apagarItem(item: Item) {
    this.service.excluir(item);
  }
}
