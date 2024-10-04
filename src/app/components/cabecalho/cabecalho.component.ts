import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  menuAberto = false;
  abrir() {
    this.menuAberto = true;
  }
  sumir() {
    this.menuAberto = false;
  }
}
