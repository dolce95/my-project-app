import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingrediente } from 'src/app/shared/ingrediente.model';

@Component({
  selector: 'app-modifica-spesa',
  templateUrl: './modifica-spesa.component.html',
  styleUrls: ['./modifica-spesa.component.css']
})
export class ModificaSpesaComponent implements OnInit {
  @ViewChild("nomeInput") nomeInputRef: ElementRef;
  @ViewChild("quantitaInput") quantitaInputRef: ElementRef;
  @Output() ingredientiAggiunti = new EventEmitter<Ingrediente>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingNome = this.nomeInputRef.nativeElement.value;
    const ingQuantita = this.quantitaInputRef.nativeElement.value;
    console.log(ingNome, ingQuantita);
    const nuovoIngrediente = new Ingrediente(ingNome, ingQuantita);
    this.ingredientiAggiunti.emit(nuovoIngrediente);
  }

}
