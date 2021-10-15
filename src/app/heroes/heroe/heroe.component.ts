
import { Component } from '@angular/core';


@Component({
  selector: 'heroe-component',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'] 
})
export class HeroesComponent {
  
  nombre:String ="Batman";
  edad:number = 22;


  getNombres(){
    this.getNombre;
  }

   getNombre(){
   /*  document.getElementById("nombreHeroe")!.innerHTML="Batman"; */
   return this.nombre
  }

  getConcatenado():String{
    return  this.nombre+this.edad.toString();
  }

  getUppers():String{
    return this.nombre.toUpperCase();
  }

    changeName(){
      let nombres:string[]=["Ironman","Javaman","Pythonman","Nextman"]
      
      this.nombre="Superman";
       }

   changeEdad(){
    this.edad = Math.floor(Math.random() * 55) + 1;
    return this.edad;
  } 
}
 








