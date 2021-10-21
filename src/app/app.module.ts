import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { DbzComponent } from './dbz/dbz.component';
/* import { DbzComponent } from './dbz/dbz.component'; */
import { DbzModule } from './dbz/dbz.module';
import { HeroesComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { MainPageComponent } from './dbz/main-page/main-page.component';



@NgModule( {
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroesComponent,
    ListadoComponent,
    MainPageComponent
    


  ],
  imports: [
    BrowserModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [ /* HeroesComponent, ListadoComponent, */DbzComponent,MainPageComponent ]

} )
export class AppModule { }
