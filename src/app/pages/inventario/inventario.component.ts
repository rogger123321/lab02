import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

export interface InventarioItem {
  id: number;
  nombre: string;
  cantidad: number;
  categoria: string;
}

const INVENTARIO_DATA: InventarioItem[] = [
  { id: 1, nombre: 'Laptop', cantidad: 5, categoria: 'Electrónica' },
  { id: 2, nombre: 'Mouse', cantidad: 10, categoria: 'Accesorios' },
  { id: 3, nombre: 'Teclado', cantidad: 8, categoria: 'Accesorios' },
  { id: 4, nombre: 'Monitor', cantidad: 3, categoria: 'Electrónica' },
  { id: 5, nombre: 'Impresora', cantidad: 2, categoria: 'Oficina' }
];

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule]
})
export class InventarioComponent {
  displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'categoria'];
  dataSource = new MatTableDataSource(INVENTARIO_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}