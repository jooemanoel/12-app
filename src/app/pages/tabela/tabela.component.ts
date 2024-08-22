import { Component } from '@angular/core';
import { Item } from 'src/app/shared/item';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  itens: Item[] = [];
  constructor(private service: ListaService) {
  }
  ngOnInit() {
    this.service.listar().subscribe(listaItens => {
      this.itens = listaItens;
    });
  }
}
