import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../shared/ingrediente.model';

@Component({
  selector: 'app-lista-spesa',
  templateUrl: './lista-spesa.component.html',
  styleUrls: ['./lista-spesa.component.css']
})
export class ListaSpesaComponent implements OnInit {
  ingredienti: Ingrediente[] = [
    new Ingrediente('Mele', 5),
    new Ingrediente('Pomodori', 10)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
