import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './dbz.component';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [DbzComponent, MainPageComponent],
  imports: [
    CommonModule
  ],
  exports:[DbzComponent,MainPageComponent]
})
export class DbzModule {


 }
