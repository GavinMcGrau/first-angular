import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroesComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';


@NgModule( {
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroesComponent,
    ListadoComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ HeroesComponent, ListadoComponent ]

} )
export class AppModule { }
