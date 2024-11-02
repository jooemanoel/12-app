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
    this.service.listar().subscribe(lista => this.lista = lista);
  }
  ordenarPorNome() {
    this.service.ordenarPorNome().subscribe(lista => this.lista = lista);
  }
  ordenarPorQt() {
    this.service.ordenarPorQt().subscribe(lista => this.lista = lista);
  }
  editarItem(item: Item) {
    this.service.editar(item).subscribe();
  }
  apagarItem(item: Item) {
    this.service.excluir(item).subscribe(lista => this.lista = lista);
  }
  aumenta(item: Item) {
    this.service.aumenta(item).subscribe(lista => this.lista = lista);
  }
  diminui(item: Item) {
    this.service.diminui(item).subscribe(lista => this.lista = lista);
  }
}
