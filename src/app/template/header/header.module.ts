import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    NavmenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NavmenuComponent
  ]
})
export class HeaderModule { }
