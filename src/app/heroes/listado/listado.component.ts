import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';


@Component( {
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: [ './listado.component.css' ]
} )
export class ListadoComponent
{

  public nombres: string[] = [ 'Superman', 'Electroman', 'Javaman', 'Bravoman' ];

  public posicion: number = 0;

  public contador ()
  {
    this.posicion = this.posicion++;

    return this.posicion;
  }

  removeItem ( index: any )
  {
    this.nombres.splice( index, 1 );
  }





}


