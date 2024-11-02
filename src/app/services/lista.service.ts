import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private _lista: Item[] = [];
  private crescente = false;
  private _id = signal(-1);
  get id() {
    return this._id();
  }
  get lista(): readonly Item[] {
    return this._lista;
  }
  salvar() {
    localStorage.setItem('Itens', JSON.stringify(this._lista));
  }
  listar(): Observable<Item[]> {
    this._lista = JSON.parse(localStorage.getItem('Itens') ?? '[]');
    return of(this._lista);
  }
  criar(input: string): Observable<Item[]> {
    if (this._id() !== -1) {
      this._lista[this._id()].nome = input;
      this._id.set(-1);
    }
    else {
      this._lista.push({ nome: input, qt: 0 });
    }
    this.salvar();
    return of(this._lista);
  }
  editar(item: Item): Observable<Item[]> {
    this._id.set(this._lista.indexOf(item));
    return of(this._lista);
  }
  excluir(item: Item): Observable<Item[]> {
    this._lista.splice(this._lista.indexOf(item), 1);
    this._id.set(-1);
    this.salvar();
    return of(this._lista);
  }
  aumenta(item: Item): Observable<Item[]> {
    this._lista[this._lista.indexOf(item)].qt++;
    this.salvar();
    return of(this._lista);
  }
  diminui(item: Item): Observable<Item[]> {
    if (item.qt > 0) {
      this._lista[this._lista.indexOf(item)].qt--;
      this.salvar();
    }
    return of(this._lista);
  }
  ordenarPorNome(): Observable<Item[]> {
    this.crescente = !this.crescente;
    if (this.crescente)
      this._lista.sort((a, b) => a.nome.localeCompare(b.nome));
    else
      this._lista.sort((a, b) => b.nome.localeCompare(a.nome));
    this._id.set(-1);
    this.salvar();
    return of(this._lista);
  }
  ordenarPorQt(): Observable<Item[]> {
    this.crescente = !this.crescente;
    if (this.crescente)
      this._lista.sort((a, b) => a.qt - b.qt);
    else
      this._lista.sort((a, b) => b.qt - a.qt);
    this._id.set(-1);
    this.salvar();
    return of(this._lista);
  }
}
