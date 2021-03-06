import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';


@Component( {
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: [ './listado.component.css' ]

} )
export class ListadoComponent
{

  public mostrar: boolean = false;
  public hide: boolean = true;
  public hideDelete: boolean = true;
  public muestraHeroe = " ";





  public nombres: string[] = [ 'Superman', 'Electroman', 'Javaman', 'Bravoman', 'Megaman' ];

  public posicion: number = 0;

  public contador ()
  {
    this.posicion = this.posicion++;

    return this.posicion;
  }

  cambio ()
  {
    this.mostrar = true;
  }
  ocultar ()
  {
    this.hide = false;
  }
  ocultarDelete ()
  {
    if ( this.posicion > this.nombres.length )
    {
      this.hideDelete = false;
      this.mostrar = false;
    }
  }

  returnItem ( item: any )
  {
    return item;
  }

  muestraHeroeClick ()
  {
    if ( this.muestraHeroe == " " )
    {
      return "No se ha seleccionado ningun heroe";

    } else
    {
      return this.muestraHeroe;
    }
  }

}

