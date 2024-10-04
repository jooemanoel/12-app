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
  constructor(private service: ListaService) {
  }
  ngOnInit() {
    this.service.listar().subscribe(listaItens => this.lista = listaItens);
  }
  modificarItem(item: Item) {
    this.service.editar(item).subscribe();
  }
  ordenarPorNome() {
    this.service.ordenarPorNome().subscribe(lista => this.lista = lista);
  }
  ordenarPorQt() {
    this.service.ordenarPorQt().subscribe(lista => this.lista = lista);
  }
  ordenarPorMd() {
    this.service.ordenarPorMd().subscribe(lista => this.lista = lista);
  }
}
