import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private lista: Item[] = [];
  salvar() {
    localStorage.setItem('Itens', JSON.stringify(this.lista));
  }
  listar(): Observable<Item[]> {
    this.lista = JSON.parse(localStorage.getItem('Itens') || '[]');
    return of(this.lista);
  }
  criar(item: Item): Observable<Item> {
    item.id = this.lista.length ? this.lista[this.lista.length - 1].id + 1 : 0;
    this.lista.push(item);
    this.salvar();
    return of(item);
  }
  buscar(id: number) {
    const item = this.lista.find(item => item.id === id);
    return of(item);
  }
  editar(item: Item): Observable<boolean> {
    const aux = this.lista.findIndex(itemDaLista => itemDaLista.id === item.id);
    this.lista[aux] = item;
    this.salvar();
    return of(true);
  }
  excluir(id: number): Observable<boolean> {
    const aux = this.lista.findIndex(itemDaLista => itemDaLista.id === id);
    this.lista.splice(aux);
    this.salvar();
    return of(true);
  }
}
