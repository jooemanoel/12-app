import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private readonly API = 'https://json-server-seven-alpha.vercel.app/lista';
  // private readonly API = 'http://127.0.0.1:3000/lista';
  constructor(private http: HttpClient) {
  }

  listar(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API);
  }

  criar(item: Item): Observable<Item> {
    return this.http.post<Item>(this.API, item);
  }

  buscar(id: number): Observable<Item> {
    const url: string = `${this.API}/${id}`;
    return this.http.get<Item>(url);
  }

  editar(item: Item): Observable<Item> {
    const url: string = `${this.API}/${item.id}`;
    return this.http.put<Item>(url, item);
  }

  excluir(id: number): Observable<Item> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Item>(url);
  }
}
