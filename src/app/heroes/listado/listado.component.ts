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


  public items: string[] = [ 'ss', 'defe' ];


}
