import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ricetta } from '../../ricetta.model';

@Component({
  selector: 'app-elemento-ricetta',
  templateUrl: './elemento-ricetta.component.html',
  styleUrls: ['./elemento-ricetta.component.css']
})
export class ElementoRicettaComponent implements OnInit {

  @Input() ricetta: Ricetta;
  @Output() ricettaSelezionata = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.ricettaSelezionata.emit();
  }

}
