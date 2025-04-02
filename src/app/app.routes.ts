import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { InventarioComponent } from './pages/inventario/inventario.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'inicio'
    },
    {
        path:'inicio',
        component:InicioComponent
    },

    {
        path:'mantenimiento',
        component:MantenimientoComponent
    },
    {
        path:'inventario',
        component:InventarioComponent,
    }
];
