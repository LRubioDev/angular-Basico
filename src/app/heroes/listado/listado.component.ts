import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América']
  heroeBorrado: string[] = []

  borrarHeroe(): void{
    this.heroeBorrado.push(this.heroes[this.heroes.length - 1])
    this.heroes.pop();
  }
}
