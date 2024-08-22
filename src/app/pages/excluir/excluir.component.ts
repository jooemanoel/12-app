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

  id: string = '';
  item: Item = { nome: '', qt: 0, md: '' };

  constructor(private service: ListaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.service.buscar(parseInt(this.id)).subscribe((item) => {
        this.item = item;
      });
    }
  }

  excluir() {
    if (this.item.id) {
      this.service.excluir(this.item.id).subscribe(() => {
        this.router.navigateByUrl('/tabela');
      });
    }
    else {
      alert('Item não encontrado!');
      this.router.navigateByUrl('/tabela');
    }
  }
}
