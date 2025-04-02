import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule]
})
export class InicioComponent {
  counter = 0;
  
  incrementarDecrementar(value: number) {
    this.counter += value;
  }
  
  reset() {
    this.counter = 0;
  }
}
