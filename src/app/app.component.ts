import { Component } from '@angular/core';
import { ListaService } from './services/lista.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '12-app';
  constructor(private service: ListaService) { }
  get idItemEmEdicao() {
    return this.service.idItemEmEdicao;
  }
}
