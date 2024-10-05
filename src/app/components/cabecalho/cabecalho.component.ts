import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit, OnDestroy {
  tabela = true;
  menuAberto = false;
  subscription!: Subscription;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).url)
    ).subscribe(url => this.tabela = url === '/tabela' ? true : false);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  abrir() {
    this.menuAberto = true;
  }
  sumir() {
    this.menuAberto = false;
  }
}
