import { Component } from '@angular/core';
import { Item } from 'src/app/services/item';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {
  itens: Item[] = [];
  constructor(private listaService: ListaService) {
  }
  ngOnInit() {
    this.listaService.getItens().subscribe(listaItens => {
      this.itens = listaItens;
      console.log(listaItens);
    });
  }
}
