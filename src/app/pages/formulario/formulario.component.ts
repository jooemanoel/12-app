import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/services/item';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario!: FormGroup;
  id: string = '';

  constructor(private service: ListaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.inicializarFormulario();
    this.carregarItem();
  }

  inicializarFormulario() {
    this.formulario = new FormGroup({
      nome: new FormControl('', Validators.required),
      qt: new FormControl(0, Validators.required),
      md: new FormControl('un', Validators.required)
    });
  }

  carregarItem() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.service.buscar(parseInt(this.id)).subscribe((item) => {
        this.formulario.patchValue(item);
      });
    }
  }

  salvarItem() {
    if (this.formulario.valid) {
      const novoItem = this.formulario.value;
      novoItem.id = this.id ? parseInt(this.id) : null;
      if (this.id) {
        this.service.editar(novoItem).subscribe(() => {
          this.router.navigateByUrl('/tabela');
        });
      }
      else {
        this.service.criar(novoItem).subscribe(() => {
          this.router.navigateByUrl('/tabela');
        });
      }
    }
  }
}
