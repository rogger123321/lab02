import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuComponent } from "./components/menu/menu.component";
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MenuComponent
],
  template: `
  <mat-toolbar class="">
    <button mat-icon-button (click)="collapsed.set(!collapsed())">
      <mat-icon>menu</mat-icon>
    </button>
    <span class="example-spacer"></span>
    <button mat-icon-button (click)="isDarkMode.set(!isDarkMode())">
      <mat-icon >
        {{isDarkMode()?'dark_mode':'light_mode'}}
      </mat-icon>
    </button>
  </mat-toolbar>

  <mat-sidenav-container>
    <mat-sidenav opened mode="side" [style.width]="sidenavWidth()">

      <app-menu [collapsed]="collapsed()"/>

    </mat-sidenav>

    <mat-sidenav-content class="content" [style.margin-left]="sidenavWidth()">
      <router-outlet/>
    </mat-sidenav-content>

  </mat-sidenav-container>

  
  `,
  styles: `
    mat-toolbar{
      position:relative;
      z-index:5;
      box-shadow:var(--mat-sys-level3) ;
    }
    .content{
      padding:24px;
      
    }
    mat-sidenav-container{
      height: calc(100vh - 64px);
    }
    mat-sidenav{
      border-radius:0
    }

    mat-sidenav,
    mat-sidenav-content{
      transition:all 500s ease-in-out;
    }

    .example-spacer {
       flex: 1 1 auto;
    }
  `
})
export class AppComponent {
  collapsed = signal(false);

  sidenavWidth = computed(()=>this.collapsed()?'65px':'250px');

  isDarkMode= signal(false);

  private _document=inject(DOCUMENT);
  constructor(){
    effect(()=>{
      this._document.body.classList.toggle('dark',this.isDarkMode())
    })
  }
  
}
