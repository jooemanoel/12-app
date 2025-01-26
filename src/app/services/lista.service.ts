import { Injectable, signal } from '@angular/core';
import { Item } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private _lista: Item[] = [];
  private _id = signal<number>(0);
  get id() {
    return this._id;
  }
  get lista(): readonly Item[] {
    return this._lista;
  }
  salvar() {
    localStorage.setItem('Itens', JSON.stringify(this._lista));
  }
  carregar() {
    this._lista = JSON.parse(localStorage.getItem('Itens') ?? '[]');
  }
  criar(input: string) {
    if (this._id()) {
      const item = this.lista.find(x => x.id === this.id());
      if (item) item.nome = input;
      this._id.set(0);
    } else {
      const item: Item = { id: this.gerarId(), nome: input };
      this._lista = [...this._lista, item];
    }
    this.salvar();
  }
  habilitarEdicao(item: Item) {
    this._id.set(item.id);
  }
  excluir(item: Item) {
    this._lista = this._lista.filter(x => x.id !== item.id);
    this.salvar();
  }
  ordenarPorNome(crescente: boolean) {
    if (crescente) this._lista.sort((a, b) => a.nome.localeCompare(b.nome));
    else this._lista.sort((a, b) => b.nome.localeCompare(a.nome));
    this.salvar();
  }
  gerarId(): number {
    let max = 0;
    this._lista.forEach(x => {
      if (x.id > max) max = x.id;
    }
    );
    return max + 1;
  }
}
