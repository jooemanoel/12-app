import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  lista: Item[] = [];
  constructor(private service: ListaService) { }
  ngOnInit() {
    this.service.listar().subscribe(listaItens => this.lista = listaItens);
  }
  ordenarPorNome() {
    this.service.ordenarPorNome().subscribe(lista => this.lista = lista);
  }
  ordenarPorQt() {
    this.service.ordenarPorQt().subscribe(lista => this.lista = lista);
  }
  editarItem(item: Item) {
    this.service.idItemEmEdicao = this.lista.indexOf(item);
    console.log(this.service.idItemEmEdicao)
  }
  apagarItem(item: Item) {
    this.service.excluir(item.id);
  }
  aumenta(item: Item) {
    item.qt++;
    this.service.editar(item);
  }
  diminui(item: Item) {
    if (item.qt > 0) {
      item.qt--;
      this.service.editar(item);
    }
  }
}
