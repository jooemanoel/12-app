import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  tabela = true;
  menuAberto = false;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        if (event.url === '/tabela') this.tabela = true;
        if (event.url === '/formulario') this.tabela = false;
      }
    });
  }
  abrir() {
    this.menuAberto = true;
  }
  sumir() {
    this.menuAberto = false;
  }
}
