import { Component, computed, Input, signal } from '@angular/core';
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'
import { RouterLink,RouterLinkActive } from '@angular/router';

export type MenuItem={
  icon:string;
  label:string;
  route:string;
}



@Component({
  selector: 'app-menu',
  imports: [MatListModule,MatIconModule,RouterLink,RouterLinkActive],
  template: `
  <div class="sidenav-header">
    <img src="icon.gif" alt="" [width]="profilePicSize()">
    <div class="header-text" [class.hide-header-text]="sideNavCollpsed()">
      <h2>Laboratorio</h2>
      <p>SENATI</p>
    </div>
  </div>
  <mat-nav-list>
    @for (item of menuItems(); track $index) {
      <a  class="menu-item">
      <mat-list-item routerLinkActive ="selected-menu-item" 
      #rla="routerLinkActive" routerLink={{item.route}}
      [activated]="rla.isActive" >
        <mat-icon matListItemIcon>{{item.icon}}</mat-icon>
        @if (!sideNavCollpsed()) {
          <span matListItemTitle>{{item.label}}</span>
        }
        
      </mat-list-item>
      </a>
    }
  </mat-nav-list>
  `,

  styles: `
  :host{
    transition:all 500ms ease-in-out
  }
    .sidenav-header{
      padding-top: 24px;
      text-align:center;

      >img{
        border-radius:100%;
        object-fit:cover;
      }

      .header-text{
        >h2{
          margin:0;
          font-size:1rem;
          line-height:1.5rem;
        }
        >p{
          margin:0;
          font-size:0.8rem;
        }
      }
    }
    .hide-header-text{
      opacity:0;
      height:0px !important ;
    }
    .selected-menu-item{
      
      
      
    }
    .menu-item{
      border-right: 50px solid;
      border-color:rgba(48, 17, 187, 0);
      
    }
    
  `
})
export class MenuComponent {

  sideNavCollpsed=signal(false);
  @Input() set collapsed(val:boolean){
    this.sideNavCollpsed.set(val)
  }

  menuItems=signal<MenuItem[]>([
    {
      icon:'home',
      label:'Inicio',
      route:'inicio'
    },
    {
      icon:'video_library',
      label:'Inventario',
      route:'inventario'
    },
    {
      icon:'video_library',
      label:'Mantenimiento',
      route:'mantenimiento'
    },
  ])

  profilePicSize = computed(()=>
    this.sideNavCollpsed()?'32':'100'
  );
}
