import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/services/item';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-linha',
  templateUrl: './linha.component.html',
  styleUrls: ['./linha.component.css']
})
export class LinhaComponent {

  @Input() item!: Item;
  @Output() itemModificado = new EventEmitter<Item>();

  constructor(private listaService: ListaService) {
  }

  ngOnInit() {
  }

  aumenta() {
    this.item.qt++;
    this.itemModificado.emit(this.item);
    console.log(this.item);
    this.listaService.salvarItem(this.item).subscribe(() => {
    });
  }
  diminui() {
    if (this.item.qt >= 0) {
      this.item.qt--;
      console.log(this.item);
      this.listaService.salvarItem(this.item).subscribe(() => {
      });
    }
  }
}
