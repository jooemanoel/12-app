import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/shared/item';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  id = '';
  item: Item = {
    nome: '', qt: 0,
    id: 0
  };

  constructor(private service: ListaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.service.buscar(parseInt(this.id)).subscribe((item) => {
        if (item) this.item = item;
      });
    }
  }

  excluir() {
    this.service.excluir(this.item.id).subscribe(() => {
      this.router.navigateByUrl('/tabela');
    });
  }
}
