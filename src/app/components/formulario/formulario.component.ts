import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/services/item';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  itemForm!: FormGroup;
  itembasico: Item = { nome: '', qt: 0, md: 'un' };
  constructor(private listaService: ListaService, private router: Router, private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.inicializarFormulario();
  }
  inicializarFormulario() {
    this.itemForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      qt: new FormControl(0, Validators.required),
      md: new FormControl('un', Validators.required)
    });
  }

  salvarItem() {
    if (this.itemForm.valid) {
      const novoItem = this.itemForm.value;
      console.log(this.itemForm.value);
      this.listaService.salvarItem(novoItem).subscribe(() => {
        this.itemForm.patchValue(this.itembasico);
        this.router.navigateByUrl('/tabela');
      });
    }
  }
}
