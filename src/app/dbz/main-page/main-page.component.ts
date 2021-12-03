import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms'

@Component( {
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [ './main-page.component.css' ]
} )
export class MainPageComponent
{

  nombreInput: any = document.getElementById( "nombreInput" )?.nodeValue;
  poderInput: any = document.getElementById( "poderInput" )?.nodeValue;
  public prsonajes: string[] = [ " ", "s" ];



  personajes: any[] = [
    { nombre: 'DragonClear', poder: 956 },
    { nombre: 'SuperSuper', poder: 996 },
    { nombre: 'Musoman', poder: 454 },
    { nombre: 'BataMan', poder: 845 },
    { nombre: 'Dr.Dree', poder: 878 },
    { nombre: 'NgMan', poder: 1515 },
  ];

  constructor ()
  {


    /*  type Personaje = Array<{ nombre: string, poder: number }>; */

    interface Personaje
    {
      nombre: string,
      poder: number
    }
    let personajes: Personaje[] = [
      { nombre: 'DragonClear', poder: 956 },
      { nombre: 'SuperSuper', poder: 996 },
      { nombre: 'Musoman', poder: 454 },
      { nombre: 'BataMan', poder: 845 },
      { nombre: 'Dr.Dree', poder: 878 },
      { nombre: 'NgMan', poder: 1515 },
    ];

    for ( let i = 0; i < personajes.length; i++ )
    {

      console.log( personajes[ i ] );
    }


  }




  update ( nombres: string, poders: number )
  {
    this.personajes.push( { nombre: nombres, poder: poders } )
  }

  clar ( nombre: string )
  {
    return nombre;
  }





}
