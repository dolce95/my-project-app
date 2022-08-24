import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RicetteComponent } from './ricette/ricette.component';
import { ListaRicetteComponent } from './ricette/lista-ricette/lista-ricette.component';
import { DettaglioRicettaComponent } from './ricette/dettaglio-ricetta/dettaglio-ricetta.component';
import { ElementoRicettaComponent } from './ricette/lista-ricette/elemento-ricetta/elemento-ricetta.component';
import { ListaSpesaComponent } from './lista-spesa/lista-spesa.component';
import { ModificaSpesaComponent } from './lista-spesa/modifica-spesa/modifica-spesa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RicetteComponent,
    ListaRicetteComponent,
    DettaglioRicettaComponent,
    ElementoRicettaComponent,
    ListaSpesaComponent,
    ModificaSpesaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
