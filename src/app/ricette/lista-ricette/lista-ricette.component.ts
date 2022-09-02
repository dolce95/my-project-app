import { Ricetta } from './../ricetta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-ricette',
  templateUrl: './lista-ricette.component.html',
  styleUrls: ['./lista-ricette.component.css']
})
export class ListaRicetteComponent implements OnInit {
  ricette: Ricetta[] = [
    new Ricetta("Ricetta test", "Semplice ricetta di test", "https://live.staticflickr.com/2353/2448935929_0cec69aefa_b.jpg"),
    new Ricetta("Ricetta test", "Semplice ricetta di test", "https://live.staticflickr.com/2353/2448935929_0cec69aefa_b.jpg")
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.ricette)
  }

}
