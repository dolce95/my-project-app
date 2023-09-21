import { Component, OnInit, Input } from '@angular/core';
import { Ricetta } from '../ricetta.model';

@Component({
  selector: 'app-dettaglio-ricetta',
  templateUrl: './dettaglio-ricetta.component.html',
  styleUrls: ['./dettaglio-ricetta.component.css']
})
export class DettaglioRicettaComponent implements OnInit {
  @Input() ricetta: Ricetta; 

  constructor() { }

  ngOnInit(): void {
  }

}
