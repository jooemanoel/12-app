import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private lista: Item[] = [];
  private crescente = false;
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
    this.lista.splice(aux, 1);
    this.salvar();
    return of(true);
  }
  ordenarPorNome() {
    this.crescente = !this.crescente;
    if (this.crescente)
      this.lista.sort((a, b) => a.nome.localeCompare(b.nome));
    else
      this.lista.sort((a, b) => b.nome.localeCompare(a.nome));
    this.salvar();
    return of(this.lista);
  }
  ordenarPorQt() {
    this.crescente = !this.crescente;
    if (this.crescente)
      this.lista.sort((a, b) => a.qt - b.qt);
    else
      this.lista.sort((a, b) => b.qt - a.qt);
    this.salvar();
    return of(this.lista);
  }
  ordenarPorMd() {
    this.crescente = !this.crescente;
    if (this.crescente)
      this.lista.sort((a, b) => a.md.localeCompare(b.md));
    else
      this.lista.sort((a, b) => b.md.localeCompare(a.md));
    this.salvar();
    return of(this.lista);
  }
}
